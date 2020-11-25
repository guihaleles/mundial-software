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
  displayedColumns: string[] = ['number', 'name', 'creationDate', 'exclusionDate'];
  salesList: Array<Salesman> = [];
  dataSource = this.salesList;

  constructor(public dialog: MatDialog, private salesService: SalesmanService) { }

  ngOnInit(): void {
    this.getSalesmanList();
  }

  getSalesmanList(){
    this.salesService.getSalesmanList().subscribe(
      (value) => {
        this.salesList = value;
        console.log(value);
        this.dataSource = [...this.salesList]
      }
    )

  }

  openDialog() {
    const dialogRef = this.dialog.open(SalesModalComponent,{
      panelClass: 'dialog-class'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result);
    });
  }

}
