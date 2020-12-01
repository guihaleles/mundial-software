import { Component, OnInit } from '@angular/core';
import{ Salesman} from '../../models/salesman';
import {MatDialog} from '@angular/material/dialog';
import { SalesModalComponent } from './sales-modal/sales-modal.component';
import { SalesmanService } from 'src/app/services/salesman.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  search: string = "";
  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];
  salesList: Array<Salesman> = [];
  dataSource = this.salesList;
  isloading: boolean = false;

  constructor(public dialog: MatDialog, private salesService: SalesmanService) { }

  ngOnInit(): void {
    this.getSalesmanList();
  }

  getSalesmanList(){
    this.salesService.getSalesmanList().subscribe(
      (values) => {
        this.salesList = Salesman.objectsToSalesman(values);
        console.log(this.salesList);
        this.dataSource = [...this.salesList]
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

    dialogRef.afterClosed().subscribe((result) => {
      if(result)
        this.getSalesmanList();
    });
  }

  delete(item:Salesman){
    console.log(item);
    let id = item.Id;
    console.log(id);
    this.salesService.deleteSalesman(id as number).subscribe(() => {
        this.getSalesmanList();
      })
  }

}
