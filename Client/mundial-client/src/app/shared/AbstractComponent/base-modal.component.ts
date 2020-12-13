import { OnInit, Inject, Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/abstract/http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MundialModel } from 'src/app/models/abstract/mundial-model';

@Component({
  template: ''
})
export abstract class BaseModalComponent<T extends MundialModel> implements OnInit {

  
    form: FormGroup = this.formBuilder.group({});
    isEditing: boolean = false;
    data?: T = undefined;
    oldId:number = 0;
    nextNumber: number = 0;
  
    constructor(public dialogRef: MatDialogRef<any>,
      public service: HttpService<T>, public formBuilder: FormBuilder)
      { 

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

    abstract setFormVariable(data:T): void;

    abstract setNullFormVariable(): void;

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
}