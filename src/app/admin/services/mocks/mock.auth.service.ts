import { AuthService, AuthPayload, JSONWebToken } from "../../../auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserSearchService } from "../search/user.search.service";

@Injectable()
export class MockAuthService extends AuthService {
  constructor(
    http: HttpClient,
    us: UserSearchService
  ) {
    console.log("using the mock)")
    super(http, us);
    this.isLoggedIn = false; // override this
  }

  /**
   * Handles the log into the website
   *
   * @param {string} email
   * @param {string} password
   * @returns {Observable<AuthPayload>}
   * @memberof MockAuthService
   */
  login(email: string, password: string): Observable<AuthPayload> {
    return Observable.of<JSONWebToken>(new JSONWebToken());
  }
}
