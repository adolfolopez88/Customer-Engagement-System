import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PlaceService {

  constructor(private http: Http) {
  }

  public getCountries(): Observable<any> {
    return this.http.get('../../assets/countries.js').map((res: any) => res.json());
  }
}




