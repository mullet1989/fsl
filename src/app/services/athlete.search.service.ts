import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Athlete } from "../models/athlete";
import { Club } from "../models/club";

@Injectable()
export class AthleteSearchService extends AbstractSearchService<Athlete> {
  _endpoint: string = "api/athlete";
}

