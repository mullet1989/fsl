import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { AuthService, JSONWebToken, AuthPayload } from '../auth.service';
import { User } from '../../models/user';
import { UserSearchService, SEARCH_SERVICE_TOKEN } from '../user.search.service';

@Injectable()
export class MockAuthService extends AuthService {

  isLoggedIn = true;

  constructor(
    @Inject(SEARCH_SERVICE_TOKEN) userSearchService: UserSearchService,
    private _http: HttpClient) {
    super(_http);
  }

  login(email: string, password: string): Observable<AuthPayload> {
    let jwt: JSONWebToken = { email: email, token: "token" };
    this.redirectUrl = "/admin/dashboard"
    let searchUrl: string = `${this.apiUrl}?email=${email}`
    console.log(searchUrl)

    // transform into observable<JsonWebToken>
    return this.http.get<User[]>(searchUrl)
      .map((users) => {
        let payload = new JSONWebToken();
        console.log(users);
        return payload;
      });
  }

}
