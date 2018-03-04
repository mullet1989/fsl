import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { SearchServiceEndpoint } from "../app.config";

@Injectable()
export class UserSearchService extends AbstractSearchService<User> {
  constructor(private http: HttpClient, @Inject(SearchServiceEndpoint) endpoint: string) {
    super(http, endpoint)
  }
}

