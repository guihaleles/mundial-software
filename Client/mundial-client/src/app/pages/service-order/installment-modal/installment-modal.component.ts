import { Component, OnInit, Inject } from '@angular/core';
import { InstallmentService } from 'src/app/services/installment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Installment } from '../../../models/installment';
import { BaseModalComponent } from 'src/app/shared/AbstractComponent/base-modal.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-installment-modal',
  templateUrl: './installment-modal.component.html',
  styleUrls: ['./installment-modal.component.scss']
})
export class InstallmentModalComponent extends BaseModalComponent<Installment> implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  isEditing: boolean = false;

  
  constructor(public dialogRef: MatDialogRef<InstallmentModalComponent>,
    public service: InstallmentService, public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Installment, private datePipe: DatePipe) {    
     
      super(dialogRef,service, formBuilder)

      this.data = data;      
    }



  setFormVariable(data:Installment){
    this.form = this.formBuilder.group({
      number:[data.Number,Validators.required],
      creationDate:[data.CreationDate, Validators.required],
      originalValue:[data.OriginalValue, Validators.nullValidator],
      observation:[data.Observation, Validators.nullValidator],

    }) 
  }

  setNullFormVariable(){
    this.getNextNumber();
    let date = this.datePipe.transform(new Date(),"yyyy-MM-ddThh:mm")
    console.log(date);

    this.form = this.formBuilder.group({
      number:[this.nextNumber,Validators.required],
      creationDate:[null, Validators.required],
      originalValue:[null, Validators.nullValidator],
      observation:[null, Validators.nullValidator],
    }) 
  }

}


