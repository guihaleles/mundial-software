import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileComponent } from './file.component';
import { FileService } from 'src/app/services/file.service';
import { FileModalComponent } from './file-modal/file-modal.component';



@NgModule({
  declarations: [
    FileComponent,
    FileModalComponent
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
    FileComponent
  ],
  providers: [
    FileService,
    FileModalComponent
  ]
})
export class FileModule { }
