import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { FileService } from 'src/app/services/file.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { File } from '../../models/file';
import { take } from 'rxjs/operators';
import { FileModalComponent } from './file-modal/file-modal.component';

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

  constructor(public dialog: MatDialog, private fileService: FileService) {
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

    this.fileService.getItensPaginated(this.pagination).subscribe(
      (values) => {
        console.log(values);
        this.pagination = Pagination.objectToPagination(values);
        this.list = File.objectsToClass(this.pagination.Response);
        this.dataSource = [...this.list];
      }
    )
  }

  create(){
    this.openDialog(undefined)
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

}
