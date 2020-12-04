import { Salesman } from './salesman';
import { HttpParams } from '@angular/common/http';

export class Pagination {
    public Response: any[];

    public PageIndex: number;

    public PageSize : number;

    public OrderBy: string;
    
    public Length: number;

    constructor(response: any, pageIndex: number, pageSize : number, orderBy: string, length: number){
        this.Response = response;
        this.PageIndex = pageIndex;
        this.PageSize = pageSize;
        this.OrderBy = orderBy;
        this.Length = length;
    }

    static objectToPagination(item: any){
        return new Pagination(item.response, item.pageIndex, item.pageSize, item.orderBy, item.length);
    }

    public httpParams(): HttpParams{
        let params = new HttpParams().set('PageSize', this.PageSize.toString());
        params = params.append('PageIndex', this.PageIndex.toString());
        params = params.append('OrderBy',this.OrderBy)

        return params;
    }
}
