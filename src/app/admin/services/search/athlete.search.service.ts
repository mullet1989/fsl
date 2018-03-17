import { AbstractSearchService } from "./abstract.search.service";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Athlete } from "../../../models/athlete";

import { Observable } from "rxjs/Observable"

interface IAthleteSearchService {
  GetAthletesByClubId(clubId: number): Observable<Athlete[]>
}

@Injectable()
export class AthleteSearchService
  extends AbstractSearchService<Athlete>
  implements IAthleteSearchService {

    GetAthletesByClubId(clubId: number): Observable<Athlete[]> {
    throw new Error("Method not implemented.");
  }
  _endpoint: string = "api/athlete";
}
