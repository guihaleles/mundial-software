import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from '../app-routing.module';
import { ExclusionConfirmationComponent } from './exclusion-confirmation/exclusion-confirmation.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ExclusionConfirmationComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    SpinnerComponent,

  ]
})
export class SharedModule { }
