import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import{ Salesman} from '../../models/salesman';
import {MatDialog} from '@angular/material/dialog';
import { SalesModalComponent } from './sales-modal/sales-modal.component';
import { SalesmanService } from 'src/app/services/salesman.service';
import { ExclusionConfirmationComponent } from 'src/app/shared/exclusion-confirmation/exclusion-confirmation.component';
import { Pagination } from 'src/app/models/pagination';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  searchString: string = "";
  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];
  salesList: Array<Salesman> = [];
  dataSource = this.salesList;
  isloading: boolean = false;
  pagination: Pagination;

  constructor(public dialog: MatDialog, private salesService: SalesmanService) {
    this.pagination = new Pagination(null,0,20,"",5);
   }

  ngOnInit(): void {
    this.getServerData();
  }

  getServerData(event?:PageEvent){
    if(event){
      this.pagination.PageIndex = event.pageIndex;
      this.pagination.PageSize = event.pageSize;
    }
    this.dataSource = [];
    this.dataSource = [...this.dataSource]

    this.salesService.getItensPaginated(this.pagination).subscribe(
      (values) => {
        this.pagination = Pagination.objectToPagination(values);
        this.salesList = Salesman.objectsToSalesman(this.pagination.Response);
        this.dataSource = [...this.salesList];
      }
    )
  }

  searchPaginated(event?:PageEvent){
    if(this.searchString == ""){
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
    this.salesService.getSearchItensPaginated(this.pagination,this.searchString).subscribe(
      (values) => {
        this.pagination = Pagination.objectToPagination(values);
        this.salesList = Salesman.objectsToSalesman(this.pagination.Response);
        this.dataSource = [...this.salesList];
      }
    )
  }


  create(){
    this.openDialog(undefined)
  }

  edit(item:Salesman){
    console.log(item);
    this.openDialog(item);
  }

  openDialog(item?: Salesman) {
    const dialogRef = this.dialog.open(SalesModalComponent,{
      data: item ,
      panelClass: 'dialog-class'
    },);

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if(result)
        this.searchPaginated();
    });
  }

  delete(item:Salesman){
    console.log(item);
    let id = item.Id;
    console.log(id);

    let msg = `Você tem certeza que deseja excluir esse vendedor: ${item.Name}`

    const dialogRef = this.dialog.open(ExclusionConfirmationComponent,{
      data: msg,
      panelClass: 'dialog-class'
    },);

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if(result){
        this.salesService.delete(id as number).subscribe(() => {
          this.searchPaginated();
        })
      }
    });
 
  }


}
