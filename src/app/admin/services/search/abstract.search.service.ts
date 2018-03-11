import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { IHasId } from '../../../models/IHasId';


export abstract class AbstractSearchService<T extends IHasId> {

  abstract _endpoint: string;

  constructor(protected _http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(this._endpoint);
  }
  getOne(id: number): Observable<T> {
    return this._http.get<T>(`${this._endpoint}/{id}`);
  }
  searchAll(term: string): Observable<T[]> {
    let query = `${this._endpoint}?email=${term}`;
    return this._http.get<T[]>(query);
  }


}
