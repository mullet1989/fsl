import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators"
import { User } from './models/user';
import { UserSearchService } from './admin/services/search/user.search.service';

@Injectable()
export class AuthService {

  apiUrl: string = "api/users"

  constructor(
    protected http: HttpClient,
    protected userSearchService: UserSearchService) {

  }

  isLoggedIn = true;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): Observable<AuthPayload> {
    let jwt: JSONWebToken = { email: email, token: "token" };
    this.redirectUrl = "/admin/dashboard"
    email = encodeURIComponent(email);

    // transform into Observable<JsonWebToken>
    return this.userSearchService.searchAll(email)
      .pipe(
        map((u, i) => {
          let user = u.find((u, i) => u.email === email);
          if (!user) {
            return new JSONWebToken();
          }
          let payload = new JSONWebToken();
          payload.email = user.email;
          return payload;
        }));
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
