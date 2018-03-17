import { AthleteSearchService } from "./athlete.search.service";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";

import "rxjs"
import { defer } from "rxjs/observable/defer";
import { Athlete } from "../../../models/athlete";

let httpClientSpy: { get: jasmine.Spy };
let athleteSearchService: AthleteSearchService;

fdescribe("AthleteSearchService", () => {
  beforeEach(() => {
    // Todo: spy on other methods too
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    athleteSearchService = new AthleteSearchService(<any>httpClientSpy);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const possibleAthletes: Athlete[] = [
      { ID: 1, firstname: "benjamin", lastname: "toomer" },
      { ID: 2, firstname: "eileen", lastname: "brandley" },
    ]

    const athleteId: number = 1;
    const expectedAthlete = possibleAthletes.find((a, i) => a.ID == athleteId);

    httpClientSpy.get.and.returnValue(asyncData(expectedAthlete));

    athleteSearchService.GetById(1).subscribe(
      heroes => expect(heroes).toEqual(expectedAthlete, 'expected athlete'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    athleteSearchService.GetById(1).subscribe(
      heroes => fail('expected an error, not heroes'),
      error => expect(error.message).toContain('test 404 error')
    );
  });

})

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
