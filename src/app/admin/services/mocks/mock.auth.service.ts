import { AuthService } from "../../../auth.service";
import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserSearchService } from "../search/user.search.service";
import { IAuthPayload, JSONWebToken } from "../../../models/AuthPayload";

@Injectable()
export class MockAuthService extends AuthService {


  constructor(
    http: HttpClient,
    us: UserSearchService
  ) {
    super(http, us);
    console.log("using the mock)")
  }

  /**
   * Handles the log into the website
   *
   * @param {string} email
   * @param {string} password
   * @returns {Observable<AuthPayload>}
   * @memberof MockAuthService
   */
  login(email: string, password: string): Observable<IAuthPayload> {
    this.isLoggedIn = true;
    return Observable.of<JSONWebToken>(new JSONWebToken());
  }

  register(email: string, password: string): Observable<IAuthPayload> {
    let jwt = new JSONWebToken(email, password)
    this.isLoggedIn = true;
    this.saveAuthToken(jwt)
    console.log("using the mock implementation")
    return Observable.of<JSONWebToken>(jwt);
  }

}
