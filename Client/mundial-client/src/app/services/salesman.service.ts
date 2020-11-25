import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import{ environment } from '../../environments/environment';

import{ Salesman} from '../models/salesman'

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private readonly SalesmanAPI = `${environment.API}/salesman`;

  constructor(private http: HttpClient) { }

  getSalesmanList() {
    return this.http.get<Salesman[]>(this.SalesmanAPI).pipe(
      take(1));
  }

  putSalesman(iten:Salesman) {
    return this.http.post(this.SalesmanAPI,Salesman).pipe(
      take(1)
    );
  }

}
