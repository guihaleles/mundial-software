import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpService } from './abstract/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService<Product>{

  constructor(http: HttpClient) {
    super(http,'Product');
   }


  public objectToClass(item: any): Product{
    return new Product(item.creationDate, item.number, item.name, 
      item.type,item.observation,item.value,item.id, item.exclusionDate);
  }
}