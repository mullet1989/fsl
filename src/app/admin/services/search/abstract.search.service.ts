import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { IHasId } from '../../../models/IHasId';
import { of } from 'rxjs/observable/of';


export abstract class AbstractSearchService<T extends IHasId> {

  abstract _endpoint: string;

  constructor(protected _http: HttpClient) { }

  GetAll(): Observable<T[]> {
    return this._http.get<T[]>(this._endpoint);
  }
  GetById(id: number): Observable<T> {
    return this._http.get<T>(`${this._endpoint}/{id}`);
  }
  UpdateById(id: number): Observable<number> {
    return Observable.of<number>(id);
  }

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
