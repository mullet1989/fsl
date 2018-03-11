import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

export const SEARCH_SERVICE_TOKEN = new InjectionToken<string>("search-service");

@Injectable()
export class UserSearchService extends AbstractSearchService<User> {
  _endpoint: string = "api/users";
}

