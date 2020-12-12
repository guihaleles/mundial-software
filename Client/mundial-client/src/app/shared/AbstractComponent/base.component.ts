import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from 'src/app/models/pagination';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/abstract/http.service';
import { MundialModel } from 'src/app/models/abstract/mundial-model';
import { ImundialModel } from 'src/app/models/abstract/imundial-model';
import { BaseModalComponent } from './base-modal.component';
import { ComponentType } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';
import { ExclusionConfirmationComponent } from '../exclusion-confirmation/exclusion-confirmation.component';
import { inject } from '@angular/core/testing';

@Component({
  template: ''
})
export abstract class BaseComponent<T extends ImundialModel> implements OnInit {

  searchString: string = "";
  list: Array<T> = [];
  dataSource = this.list;
  isloading: boolean = false;
  pagination: Pagination;
  deleteMsg: string = "Você tem certeza que deseja deletar o item de número: "
  abstract modalComponent: ComponentType<unknown>;

  constructor(public dialog: MatDialog, public service: HttpService<T>,
    ) {
      this.pagination = new Pagination(null,0,20,"",5);
  }  

  ngOnInit(){
    this.getServerData();
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
          console.log("Get server data");
          console.log(values);
          console.log(this.pagination.PageIndex);
          this.pagination = Pagination.objectToPagination(values);
          this.list = this.service.objectsToClass(this.pagination.Response);
          this.dataSource = [...this.list];
        }
      )
  }

  searchPaginated(event?:PageEvent){
    if(this.searchString == ""){
      this.pagination.PageIndex = 0;
      this.getServerData(event);
      return;
    }
    if(event){
      this.pagination.PageIndex = event.pageIndex;
      this.pagination.PageSize = event.pageSize;
    }
    else{
      this.pagination.PageIndex = 0;  
    }   
    this.dataSource = [];
    this.dataSource = [...this.dataSource]
    this.service.getSearchItensPaginated(this.pagination,this.searchString).subscribe(
      (values) => {
        this.pagination = Pagination.objectToPagination(values);
        this.list = this.service.objectsToClass(this.pagination.Response);
        this.dataSource = [...this.list];
      }
    )
  }

  openDialog(item?: T) {
    const dialogRef = this.dialog.open(this.modalComponent,{
      data: item ,
      panelClass: 'dialog-class'
    },);

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if(result)
        this.searchPaginated();
    });
  }

  create(){
    this.openDialog(undefined)
  }

  edit(item:T){
    console.log(item);
    this.openDialog(item);
  }

  delete(item:T){
    console.log(item);
    let id = item.Id;
    console.log(id);

    const dialogRef = this.dialog.open(ExclusionConfirmationComponent,{
      data: `${this.deleteMsg} ${item.Number}`,
      panelClass: 'dialog-class'
    },);

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if(result){
        this.service.delete(id as number).subscribe(() => {
          this.searchPaginated();
        })
      }
    });
  
  }
}