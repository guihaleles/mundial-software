import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceOrderComponent } from './service-order.component';
import { ServiceOrderService } from 'src/app/services/service-order.service';
import { ServiceOrderModalComponent } from './service-order-modal/service-order-modal.component';
import { InstallmentModalComponent } from './installment-modal/installment-modal.component';
import { SalesmanService } from 'src/app/services/salesman.service';
import { FileService } from 'src/app/services/file.service';



@NgModule({
  declarations: [
    ServiceOrderComponent,
    ServiceOrderModalComponent,
    InstallmentModalComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    ServiceOrderComponent
  ],
  providers: [
    ServiceOrderService,
    ServiceOrderModalComponent,
    InstallmentModalComponent,
    SalesmanService,
    FileService,
    DatePipe
  ]
})
export class ServiceOrderModule { }
