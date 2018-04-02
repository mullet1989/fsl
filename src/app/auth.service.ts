import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { map, tap, catchError } from "rxjs/operators"
import { User } from './models/user';
import { UserSearchService } from './admin/services/search/user.search.service';
import { JSONWebToken, IAuthPayload } from './models/AuthPayload';
import { BehaviorSubject } from 'rxjs';

export abstract class AuthService {

  authUrl: string = "/api/auth"

  private _isLoggedIn: boolean = false;
  get isLoggedIn() {
    return this._isLoggedIn;
  }
  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  constructor(
    protected _http: HttpClient,
    protected _userSearchService: UserSearchService) {
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  /**
   * This handles the log into the website
   *
   * @param {string} email
   * @param {string} password
   * @returns {Observable<AuthPayload>} Authentication Payload
   * @memberof AuthService
   */
  login(email: string, password: string): Observable<IAuthPayload> {
    let jwt = new JSONWebToken(email, password);
    this.redirectUrl = "/admin/dashboard"
    email = encodeURIComponent(email);
    return this._http.post<JSONWebToken>("/login", jwt);
  }

  /**
   * register takes the user email and password and creates
   * an account for the user on the server
   *
   * @param {string} email
   * @param {string} password
   * @returns {Observable<AuthPayload>}
   * @memberof AuthService
   */
  register(email: string, password: string): Observable<IAuthPayload> {
    let url = `${this.authUrl}/register`
    return this._http.post<IAuthPayload>(url, {
      email: email,
      password: password
    }).pipe(
      tap((payload) => console.log(JSON.stringify(payload))),
      catchError((err, observable) => {
        console.log(err);
        return observable;
      })
    );
  }

  /**
   * saveAuthToken
   *
   * @private
   * @param {AuthPayload} token
   * @memberof AuthService
   */
  protected saveAuthToken(token: IAuthPayload) {
    localStorage.setItem("fsl_auth", JSON.stringify(token))
  }

  logout(): void {
    this._isLoggedIn = false;
  }
}
