import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesModalComponent } from './sales-modal/sales-modal.component'
import { SalesListComponent } from './sales-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesmanService } from 'src/app/services/salesman.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SalesListComponent,
    SalesModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SalesListComponent
  ],
  providers: [
    SalesmanService
  ]

})
export class SalesmanModule { }
