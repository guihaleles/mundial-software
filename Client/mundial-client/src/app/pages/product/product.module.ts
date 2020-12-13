import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModalComponent } from './product-modal/product-modal.component'
import { ProductComponent } from './product.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductModalComponent,
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
    ProductComponent
  ],
  providers: [
    ProductService
  ]

})
export class ProductModule { }
