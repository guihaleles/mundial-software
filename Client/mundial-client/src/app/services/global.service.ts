import { Injectable, EventEmitter } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private isLoading: boolean = false;
  public static sharedIsloading = new EventEmitter<boolean>();
  locale: string = 'pt';
  format: string = 'dd-mm-yyyy'
  date: Date = new Date();

  constructor() { }

  getIsLoading(){
    return this.isLoading;
  }

  setIsLoading(isLoading:boolean){
    this.isLoading = isLoading;
    GlobalService.sharedIsloading.emit(isLoading);
    console.log(isLoading)
  }

  getTime(){
    console.log(formatDate(this.date, this.format, this.locale));
    return formatDate(this.date, this.format, this.locale);
  }



}
