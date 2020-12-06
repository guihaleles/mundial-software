import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{ Salesman} from '../models/salesman'
import { HttpService } from './abstract/http.service';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService extends HttpService<Salesman>{

  constructor(http: HttpClient) {
    super(http,'Salesman');
   }


  public objectToClass(item: any): Salesman{
    return new Salesman(item.creationDate, item.number, item.name, item.id, item.exclusionDate)
  }

}
