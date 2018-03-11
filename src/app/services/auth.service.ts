import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  apiUrl: string = "api/users"

  constructor(protected http: HttpClient) {

  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): Observable<AuthPayload> {
    let jwt: JSONWebToken = { email: email, token: "token" };
    this.redirectUrl = "/admin/dashboard"
    let searchUrl: string = `${this.apiUrl}?email=${email}`

    // transform into observable<JsonWebToken>
    return this.http.get<User[]>(searchUrl)
      .map((users) => {
        let user = users.find((u, i) => u.email === email);
        let payload = new JSONWebToken();
        payload.email = user.email;
        return payload;
      });
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
}
