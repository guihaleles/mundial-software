import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from 'src/app/services/service-order.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceOrder } from '../../models/service-order';
import { ServiceOrderModalComponent } from './service-order-modal/service-order-modal.component';
import { BaseComponent } from 'src/app/shared/AbstractComponent/base.component';


export const displayedColumns: string[] =[
  'number','name', 'creationDate', 'edit', 'exclude'
]
@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss']
})
export class ServiceOrderComponent extends BaseComponent<ServiceOrder> {

  displayedColumns: string[] = ['number', 'name', 'creationDate', 'edit', 'exclude'];

  modalComponent = ServiceOrderModalComponent;

  constructor(public dialog: MatDialog, public service: ServiceOrderService) {
    super(dialog,service)
    
    this.deleteMsg = 'Você tem certeza que deseja deletar o OSM de número: '
  }




}
