import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHasId } from '../models/IHasId';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

export abstract class AbstractSearchService<T extends IHasId> {

  constructor(private _http: HttpClient, private _endpoint: string) {
    console.log(_endpoint);
  }

  getAll(): Observable<T[]> {
    return this._http.get(this._endpoint).map(resp => resp as T[]);
  }
  getOne(id: number): Observable<T> {
    return this._http.get(`${this._endpoint}/{id}`).map(resp => resp as T);
  }
  searchAll(term: string): Observable<T[]> {
    let query = `${this._endpoint}?q=${term}`;
    return this._http.get(query).map(resp => resp as T[]);
  }


}
