import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceOrder } from '../models/service-order';
import { HttpService } from './abstract/http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService extends HttpService<ServiceOrder>{

  constructor(http: HttpClient) {
    super(http,'ServiceOrder');
   }

   public objectToClass(item: any): ServiceOrder{
    return new ServiceOrder(
      item.creationDate,
      item.number, 
      item.id, 
      item.exclusionDate)
  }
}
