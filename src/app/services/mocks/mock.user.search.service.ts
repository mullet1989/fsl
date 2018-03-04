import { AbstractSearchService } from "../abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user";
import { USER_SEARCH_TOKEN } from "../user.search.service";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class MockUserSearchService extends AbstractSearchService<User> {
  constructor(
    private http: HttpClient,
    @Inject(USER_SEARCH_TOKEN) endpoint: string) {
    super(http, endpoint)
  }

  searchAll(term: string): Observable<User[]> {
    return Observable.of(this.users)
      .map((users) =>
        users.filter((user) => new RegExp(term).test(user.name)))
  }

  public users: User[] = [
    new User(1, "benjamin"),
    new User(2, "eileen"),
    new User(1, "ben"),
  ];
}
