import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchable } from '../models/isearchable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

export abstract class AbstractSearchService<T extends ISearchable> {

  constructor(private _http: HttpClient, private _endpoint: string) { }

  getAll(): Observable<T[]> {
    return this._http.get(this._endpoint).map(resp => resp as T[]);
  }
  getOne(id: number): Observable<T> {
    return this._http.get(`${this._endpoint}/{id}`).map(resp => resp as T);
  }


}
