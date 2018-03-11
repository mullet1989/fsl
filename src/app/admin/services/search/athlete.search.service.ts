import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Athlete } from "../../../models/athlete";

@Injectable()
export class AthleteSearchService extends AbstractSearchService<Athlete> {
  _endpoint: string = "api/athlete";
}
