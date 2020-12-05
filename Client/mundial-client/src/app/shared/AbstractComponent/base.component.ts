import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from 'src/app/models/pagination';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from 'src/app/services/file.service';
import { HttpService } from 'src/app/services/abstract/http.service';

export abstract class BaseComponent<T> implements OnInit {

    searchString: string = "";
    displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];
    list: Array<File> = [];
    dataSource = this.list;
    isloading: boolean = false;
    pagination: Pagination;

    constructor(public dialog: MatDialog, private service: HttpService<T>) {
        this.pagination = new Pagination(null,0,20,"",5);
    }
    
  
    ngOnInit(){

    }

    getServerData(event?:PageEvent){
        if(event){
          this.pagination.PageIndex = event.pageIndex;
          this.pagination.PageSize = event.pageSize;
        }
        this.dataSource = [];
        this.dataSource = [...this.dataSource]
    
        this.service.getItensPaginated(this.pagination).subscribe(
          (values) => {
            console.log(values);
            this.pagination = Pagination.objectToPagination(values);
            this.list = T.objectsToClass(this.pagination.Response);
            this.dataSource = [...this.list];
          }
        )
      }
}