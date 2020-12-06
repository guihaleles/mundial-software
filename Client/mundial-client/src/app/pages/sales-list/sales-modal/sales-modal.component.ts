import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesmanService } from 'src/app/services/salesman.service';
import { Salesman } from 'src/app/models/salesman';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pipe, throwError } from 'rxjs';
import { BaseModalComponent } from 'src/app/shared/AbstractComponent/base-modal.component';

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  styleUrls: ['./sales-modal.component.scss']
})
export class SalesModalComponent extends BaseModalComponent<Salesman> {

  form: FormGroup = this.formBuilder.group({});
  isEditing: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<SalesModalComponent>,
    public service: SalesmanService, public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Salesman) {    
     
      super(dialogRef,service, formBuilder)

      this.data = data;
      
    }

  setFormVariable(data:Salesman){
    this.form = this.formBuilder.group({
      number:[data.Number,Validators.required],
      name:[data.Name, Validators.required]
    });
  }

  setNullFormVariable(){
    this.form = this.formBuilder.group({
      number:[null,Validators.required],
      name:[null, Validators.required]
    });
  }
}
