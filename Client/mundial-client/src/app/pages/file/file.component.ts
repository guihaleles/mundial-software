import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { FileService } from 'src/app/services/file.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { File } from '../../models/file';
import { take } from 'rxjs/operators';
import { FileModalComponent } from './file-modal/file-modal.component';
import { ExclusionConfirmationComponent } from 'src/app/shared/exclusion-confirmation/exclusion-confirmation.component';

export const displayedColumns: string[] =[
  'number','name', 'creationDate', 'edit', 'exclude'
]
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  searchString: string = "";
  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];
  list: Array<File> = [];
  dataSource = this.list;
  isloading: boolean = false;
  pagination: Pagination;

  constructor(public dialog: MatDialog, private service: FileService) {
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

    this.service.getItensPaginated(this.pagination).subscribe(
      (values) => {
        console.log(values);
        this.pagination = Pagination.objectToPagination(values);
        this.list = File.objectsToClass(this.pagination.Response);
        this.dataSource = [...this.list];
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
    this.service.getSearchItensPaginated(this.pagination,this.searchString).subscribe(
      (values) => {
        this.pagination = Pagination.objectToPagination(values);
        this.list = File.objectsToClass(this.pagination.Response);
        this.dataSource = [...this.list];
      }
    )
  }

  create(){
    this.openDialog(undefined)
  }

  edit(item:File){
    console.log(item);
    this.openDialog(item);
  }

  openDialog(item?: File) {
    const dialogRef = this.dialog.open(FileModalComponent,{
      data: item ,
      panelClass: 'dialog-class'
    },);

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if(result)
        this.getServerData();
    });
  }

  delete(item:File){
    console.log(item);
    let id = item.Id;
    console.log(id);

    let msg = `Você tem certeza que deseja excluir essa ficha: ${item.Name}`

    const dialogRef = this.dialog.open(ExclusionConfirmationComponent,{
      data: msg,
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
