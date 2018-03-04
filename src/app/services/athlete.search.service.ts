import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { USER_SEARCH_TOKEN } from "./user.search.service";
import { Athlete } from "../models/athlete";
import { Club } from "../models/club";

@Injectable()
export class UserSearchService extends AbstractSearchService<Athlete> {
  constructor(
    private http: HttpClient,
    @Inject(USER_SEARCH_TOKEN) endpoint: string) {
    super(http, endpoint)
  }
}

