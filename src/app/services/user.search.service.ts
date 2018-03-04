import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

export const USER_SEARCH_TOKEN = new InjectionToken<string>("search-service");

@Injectable()
export class UserSearchService extends AbstractSearchService<User> {
  constructor(
    private http: HttpClient,
    @Inject(USER_SEARCH_TOKEN) endpoint: string) {
    super(http, endpoint)
  }

  public users: User[] = [
    new User(1, "benjamin"),
    new User(2, "eileen"),
    new User(1, "ben"),
  ];
}

