import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Installment } from '../models/installment';
import { ServiceOrder } from '../models/service-order';
import { HttpService } from './abstract/http.service';

@Injectable({
  providedIn: 'root'
})
export class InstallmentService extends HttpService<Installment>{

  constructor(http: HttpClient) {
    super(http,'Installment');
   }

   public objectToClass(item: any): Installment{
    return new Installment(
      item.creationDate,
      item.number, 
      item.id, 
      item.exclusionDate)
  }
}
