import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import{ environment } from '../../environments/environment';

import{ Salesman} from '../models/salesman'

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private readonly SalesmanAPI = `${environment.API}/Salesman`;

  constructor(private http: HttpClient) { }

  getSalesmanList() {
    return this.http.get<Salesman[]>(this.SalesmanAPI).pipe(
      take(1));
  }

  putSalesman(iten:Salesman) {
    return this.http.put(this.SalesmanAPI,Salesman).pipe(
      take(1)
    );
  }

  updateSaelsman(iten:Salesman){
    return this.http.post(`${this.SalesmanAPI}/Update`,iten).pipe(
      take(1)
    );
  }

  deleteSalesman(id:number){
    return this.http.delete(`${this.SalesmanAPI}/${id}`).pipe(
      take(1)
    );
  }

}
