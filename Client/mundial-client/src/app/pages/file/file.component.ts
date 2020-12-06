import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { FileService } from 'src/app/services/file.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { File } from '../../models/file';
import { take } from 'rxjs/operators';
import { FileModalComponent } from './file-modal/file-modal.component';
import { ExclusionConfirmationComponent } from 'src/app/shared/exclusion-confirmation/exclusion-confirmation.component';
import { BaseComponent } from 'src/app/shared/AbstractComponent/base.component';
import { SalesModalComponent } from '../sales-list/sales-modal/sales-modal.component';
import { inject } from '@angular/core/testing';

export const displayedColumns: string[] =[
  'number','name', 'creationDate', 'edit', 'exclude'
]
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent extends BaseComponent<File> {

  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];

  modalComponent = FileModalComponent;

  constructor(public dialog: MatDialog, public service: FileService) {
    super(dialog,service)
    
    this.deleteMsg = 'Você tem certeza que deseja deletar a ficha de número: '
  }




}
