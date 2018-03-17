import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractSearchService } from "./abstract.search.service";
import { User } from "../../../models/user";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

export const SEARCH_SERVICE_TOKEN = new InjectionToken<string>("search-service");

export interface IUserSearchService {
  GetByEmail(email: string): Observable<User[]>
}

@Injectable()
export class UserSearchService extends AbstractSearchService<User>
  implements IUserSearchService {

  GetByEmail(email: string): Observable<User[]> {
    let url = `${this._endpoint}?email=^${encodeURIComponent(email)}$`;
    return this._http.get<User[]>(url)
      .pipe(
        tap((req) => console.log(req)),
        catchError(this.handleError('GetByEmail', []))
      )
  }
  _endpoint: string = "api/users";

  constructor(http: HttpClient) {
    super(http)
  }
}

