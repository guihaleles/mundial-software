import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesmanService } from 'src/app/services/salesman.service';
import { Salesman } from 'src/app/models/salesman';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pipe, throwError } from 'rxjs';

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  styleUrls: ['./sales-modal.component.scss']
})
export class SalesModalComponent implements OnInit {

  form: FormGroup;
  isEditing: boolean = false;

  constructor(public dialogRef: MatDialogRef<SalesModalComponent>,
    private salesService: SalesmanService, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Salesman) {    
     
      console.log(this.data);
      if(this.data){
        this.form = this.formBuilder.group({
          number:[data.Number,Validators.required],
          name:[data.Name, Validators.required]
        })
        this.isEditing = true;
      }
      else{
        this.form = this.formBuilder.group({
          number:[null,Validators.required],
          name:[null, Validators.required]
        })
      }

    }

  ngOnInit(): void { 
  }
  

  save() {
    
    if(!this.form.valid){
      Object.keys(this.form.controls).forEach(field => { 
        const control = this.form.get(field);
        if(control)           
          control.markAsTouched({ onlySelf: true });       
      });
      throw Error("Alguns campos obrigatórios não foram preenchidos")
    }
    else{

      if(!this.isEditing){
        this.putNewSalesman();
      }else if(this.data.Id){
        this.updateSalesman();
      }else{
        throw Error("Não foi possível salvar")
      }

    }    
    
  }

  close(){
    this.dialogRef.close(false)
  }

  putNewSalesman(){
    let values = this.form.value;

    let newSalesman = (new Salesman(new Date(), values.number, values.name));
    console.log("putNewSalesman");
    console.log(newSalesman);
    this.salesService.put(newSalesman).subscribe(
      () => this.dialogRef.close(true),
    );
  }

  updateSalesman(){
    let values = this.form.value;

    let salesmanToUpdate = (new Salesman(new Date(), values.number, values.name,this.data.Id));
    console.log(salesmanToUpdate);
    console.log("updateSalesman");
    this.salesService.update(salesmanToUpdate).subscribe(
      () => this.dialogRef.close(true),
    );
  }

}
