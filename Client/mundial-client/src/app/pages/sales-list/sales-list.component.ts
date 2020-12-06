import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import{ Salesman} from '../../models/salesman';
import {MatDialog} from '@angular/material/dialog';
import { SalesModalComponent } from './sales-modal/sales-modal.component';
import { SalesmanService } from 'src/app/services/salesman.service';
import { ExclusionConfirmationComponent } from 'src/app/shared/exclusion-confirmation/exclusion-confirmation.component';
import { Pagination } from 'src/app/models/pagination';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/AbstractComponent/base.component';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent extends BaseComponent<Salesman> {

  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];
  modalComponent = SalesModalComponent;

  constructor(public dialog: MatDialog, public service: SalesmanService) {
    super(dialog,service)
    
    this.deleteMsg = 'Você tem certeza que deseja deletar o vendedor de número: '
  }



}
