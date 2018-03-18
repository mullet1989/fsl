import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators"
import { User } from './models/user';
import { UserSearchService } from './admin/services/search/user.search.service';

export abstract class AuthService {

  apiUrl: string = "api/users"

  constructor(
    protected _http: HttpClient,
    protected _userSearchService: UserSearchService) {

  }

  isLoggedIn = true;

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
  login(email: string, password: string): Observable<AuthPayload> {
    let jwt: JSONWebToken = { email: email, token: "token" };
    this.redirectUrl = "/admin/dashboard"
    email = encodeURIComponent(email);
    return this._http.post<JSONWebToken>("/login", jwt);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}

export interface AuthPayload {
  email: string
  token: string
}

export class JSONWebToken implements AuthPayload {
  email: string;
  token: string;

  constructor();
  constructor(email?: string, token?: string) {

  }
}
