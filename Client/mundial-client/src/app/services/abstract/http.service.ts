import { HttpClient, HttpParams } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import{ environment } from '../../../environments/environment';

import { Pagination } from '../../models/pagination';


export abstract class HttpService<T>  {


  private readonly API = `${environment.API}/${this.controllerName}`;

  constructor(private http: HttpClient, public controllerName: string) { }

  abstract objectToClass(item: any): T;

  public objectsToClass(itens: any[]): T[]{
    let array:T[] = [];
    console.log(itens);
    
    itens.forEach((item)=> {
      array.push(this.objectToClass(item))
    })

    return array;
  }

  getAll() {
    return this.http.get<T[]>(this.API).pipe(
      take(1));
  }

  getItensPaginated(item: Pagination){

    return this.http.get<Pagination>(`${this.API}/GetAllValidPaginated`, 
                                    {params: item.httpParams()})
                                    .pipe(take(1));  
  }

  getAllItensPaginated(item: Pagination){

    return this.http.get<Pagination>(`${this.API}/GetAllPaginated`, 
                                    {params: item.httpParams()})
                                    .pipe(take(1));  
  }

  getSearchItensPaginated(item: Pagination, searchValue:string){
    let params = item.httpParams();
    params = params.append('search',searchValue);

    return this.http.get<Pagination>(`${this.API}/GetSearchPaginated`, 
                                    {params: params})
                                    .pipe(take(1));  
  }

  search(value: string){
    return this.http.get<T[]>(`${this.API}/search/${value}`).pipe(
      take(1));
  }

  put(item:T) {
    return this.http.put(this.API,item).pipe(
      take(1)
    );
  }

  update(item:T){
    return this.http.post(`${this.API}/Update`,item).pipe(
      take(1)
    );
  }

  delete(id:number){
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1)
    );
  }

}
