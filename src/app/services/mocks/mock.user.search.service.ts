import { AbstractSearchService } from "../abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { SEARCH_SERVICE_TOKEN } from "../user.search.service";

@Injectable()
export class MockUserSearchService extends AbstractSearchService<User> {
  _endpoint: string = "api/users";
  constructor(http: HttpClient) {
    super(http);
  }

  searchAll(term: string): Observable<User[]> {
    return this._http.get<User[]>(this._endpoint)
  }

}
