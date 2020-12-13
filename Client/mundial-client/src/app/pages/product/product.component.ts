import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { BaseComponent } from 'src/app/shared/AbstractComponent/base.component';
import { Product } from 'src/app/models/product';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent<Product> {

  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];
  modalComponent = ProductModalComponent;

  constructor(public dialog: MatDialog, public service: ProductService) {
    super(dialog,service)
    
    this.deleteMsg = 'Você tem certeza que deseja deletar o produto de número: '
  }
  

}
