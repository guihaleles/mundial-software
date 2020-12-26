import { Component, OnInit, Inject, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ServiceOrderService } from 'src/app/services/service-order.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServiceOrder } from '../../../models/service-order';
import { BaseModalComponent } from 'src/app/shared/AbstractComponent/base-modal.component';
import { DatePipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, map, mergeMap, take } from 'rxjs/operators';
import { InstallmentModalComponent } from '../installment-modal/installment-modal.component';
import { ExclusionConfirmationComponent } from 'src/app/shared/exclusion-confirmation/exclusion-confirmation.component';
import { Installment } from 'src/app/models/installment';
import { Salesman } from 'src/app/models/salesman';
import { FileService } from 'src/app/services/file.service';
import { SalesmanService } from 'src/app/services/salesman.service';
import { fromEvent, Subject } from 'rxjs';
import { File } from '../../../models/file';

@Component({
  selector: 'app-service-order-modal',
  templateUrl: './service-order-modal.component.html',
  styleUrls: ['./service-order-modal.component.scss']
})
export class ServiceOrderModalComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  isEditing: boolean = false;
  deleteMsg = '';
  instaments: Array<Installment> = [];
  file?: File;
  fileNumber?: number;
  salesman?: Salesman;
  salesmans: Array<Salesman> = [];
  searchTextChanged = new Subject<number>();
  subscription: any;
  data?: ServiceOrder;
  oldId?:number;
  nextNumber?:number;

  constructor(public dialogRef: MatDialogRef<ServiceOrderModalComponent>,
    public service: ServiceOrderService, public formBuilder: FormBuilder,
    private datePipe: DatePipe, public dialog: MatDialog,public fileService:FileService,
     public salesmanService:SalesmanService) {    

    }

  ngOnInit(){
      console.log(this.data);
      if(this.data){
        this.setFormVariable(this.data);
        this.oldId = this.data.Id? this.data.Id: 0; 
        this.isEditing = true;
      }
      else{
        this.setNullFormVariable();
        console.log("set null variable")
      } 


    this.subscription = this.searchTextChanged.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap(search => this.getValues(search)))
        .subscribe(() => { });
    }

    getNextNumber(){
      this.service.getLastNumber().subscribe(
        (value) => {
          this.nextNumber = value + 1;
          console.log(this.nextNumber);
          this.form.patchValue({
            number: this.nextNumber
          })
        }
      );
    }



    close(){
        this.dialogRef.close(false);
    }

    putNew(){
        let values = this.form.value;
        values.creationDate = new Date();
        let newItem = this.service.objectToClass(values);
        console.log("put");
        console.log(newItem);
        this.service.put(newItem).subscribe(
          () => this.dialogRef.close(true),
        );
    }

  update(){
      let values = this.form.value;
      let itemToUpdate = this.service.objectToClass(values);
      itemToUpdate.CreationDate = new Date();
      itemToUpdate.Id = this.oldId;
      console.log(itemToUpdate);
      console.log("Update");
      this.service.update(itemToUpdate).subscribe(
        () => this.dialogRef.close(true),
      );
  }

  save() {
      console.log(this.form);
      if(!this.form.valid){
        Object.keys(this.form.controls).forEach(field => { 
          const control = this.form.get(field);
          if(control)           
            control.markAsTouched({ onlySelf: true });       
        });
        throw Error("Alguns campos obrigatórios não foram preenchidos");
      }
      else{
        if(!this.isEditing){
          this.putNew();
        }else if(this.oldId){
          this.update();
        }else{
          throw Error("Não foi possível salvar");
        }
      }    
  }


  

  getFile(fileNumber: number){
    return this.fileService.getItembyNumber(fileNumber).pipe(
    ).subscribe((result)=> {this.file = result;})
  }

  getValues(fileNumber: number) {
    return this.fileService.getItembyNumber(fileNumber)
    .pipe(
      map((response)=>{this.file = response})
    )
}



  delete(item:any){
    
  }
  
  search($event:any) {
    this.getFile($event.target.value);
}
    

  setFormVariable(data:ServiceOrder){
    this.form = this.formBuilder.group({
      number:[data.Number,Validators.required],
      creationDate:[data.CreationDate, Validators.required],
      salesmanId:[data.SalesmanId,Validators.nullValidator],
      fileNumber:[data.File?.Number, Validators.nullValidator],
      fileId:[data.FileId,Validators.nullValidator],
      patient:[data.Patient, Validators.nullValidator],
      esfereicOD:[data.EsfericOD,Validators.nullValidator],
      cilindricOD:[data.CilindricOD,Validators.nullValidator],
      axisOD:[data.AxisOD,Validators.nullValidator],
      dnpOD:[data.DNPOD,Validators.nullValidator],
      acoOD:[data.ACOOD,Validators.nullValidator],
      eyelidOD:[data.EyelidOD,Validators.nullValidator],
      esfericOE: [data.EsfericOE,Validators.nullValidator],
      cilindricOE: [data.CilindricOE,Validators.nullValidator],
      axisOE: [data.AxisOE,Validators.nullValidator],
      dnpOE:[data.DNPOE,Validators.nullValidator],
      aCOOE:[data.ACOOE,Validators.nullValidator],
      eyelidOE: [data.EyelidOE,Validators.nullValidator],
      vertical: [data.Vertical,Validators.nullValidator],
      horizontal: [data.Horizontal,Validators.nullValidator],
      diagonal: [data.Diagonal,Validators.nullValidator],
      ponte: [data.Ponte,Validators.nullValidator],
      observation:[data.Observation, Validators.nullValidator]

    }) 
  }

  setNullFormVariable(){
    this.getNextNumber();
    let date = this.datePipe.transform(new Date(),"yyyy-MM-ddThh:mm")
    console.log(date);

    this.form = this.formBuilder.group({
      number:[this.nextNumber,Validators.required],
      creationDate:[date, Validators.required],
      salesmanId:[null,Validators.nullValidator],
      fileNumber:[null, Validators.nullValidator],
      fileId:[null,Validators.nullValidator],
      patient:[null, Validators.nullValidator],
      esfereicOD:[null,Validators.nullValidator],
      cilindricOD:[null,Validators.nullValidator],
      axisOD:[null,Validators.nullValidator],
      dnpOD:[null,Validators.nullValidator],
      acoOD:[null,Validators.nullValidator],
      eyelidOD:[null,Validators.nullValidator],
      esfericOE: [null,Validators.nullValidator],
      cilindricOE: [null,Validators.nullValidator],
      axisOE: [null,Validators.nullValidator],
      dnpOE:[null,Validators.nullValidator],
      aCOOE:[null,Validators.nullValidator],
      eyelidOE: [null,Validators.nullValidator],
      vertical: [null,Validators.nullValidator],
      horizontal: [null,Validators.nullValidator],
      diagonal: [null,Validators.nullValidator],
      ponte: [null,Validators.nullValidator],
      observation:[null, Validators.nullValidator]
    }) 
  }

}


