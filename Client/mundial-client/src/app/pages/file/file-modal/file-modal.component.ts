import { Component, OnInit, Inject } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { File } from '../../../models/file';

@Component({
  selector: 'app-file-modal',
  templateUrl: './file-modal.component.html',
  styleUrls: ['./file-modal.component.scss']
})
export class FileModalComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  isEditing: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<FileModalComponent>,
    private service: FileService, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: File) {    
     
      console.log(this.data);
      if(this.data){
        this.setFormVariable(data);
        this.isEditing = true;
      }
      else{
        this.setNullFormVariable();
        console.log("set null variable")
      }

    }

  ngOnInit(): void {
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
      }else if(this.data.Id){
        this.update();
      }else{
        throw Error("Não foi possível salvar");
      }
    }    
  }

  close(){
    this.dialogRef.close(false);
  }

  putNew(){
    let values = this.form.value;
    values.creationDate = new Date();
    let newItem = File.objectToClass(values);
    console.log("put");
    console.log(newItem);
    this.service.put(newItem).subscribe(
      () => this.dialogRef.close(true),
    );
  }

  update(){
    let values = this.form.value;
    let itemToUpdate = File.objectToClass(values);
    itemToUpdate.CreationDate = new Date();
    itemToUpdate.Id = this.data.Id;
    console.log(itemToUpdate);
    console.log("Update");
    this.service.update(itemToUpdate).subscribe(
      () => this.dialogRef.close(true),
    );
  }

  setFormVariable(data:File){
    this.form = this.formBuilder.group({
      creationDate:[data.CreationDate, Validators.nullValidator],
      number:[data.Number, Validators.required],
      creationFileDate:[data.CreationFileDate, Validators.required],
      name:[data.Name, Validators.required],
      city : [data.City, Validators.nullValidator],
      street :  [data.Street, Validators.nullValidator], 
      neighborhood : [data.Neighborhood, Validators.nullValidator],
      houseNumber : [data.HouseNumber, Validators.nullValidator],
      complement : [data.Complement, Validators.nullValidator],
      cEP : [data.CEP, Validators.nullValidator],
      phoneNumber : [data.PhoneNumber, Validators.nullValidator],
      profession : [data.Profession, Validators.nullValidator],
      salary : [data.Salary, Validators.nullValidator],
      workCity : [data.WorkCity, Validators.nullValidator],
      workStreet : [data.WorkStreet, Validators.nullValidator],  
      workNeighborhood : [data.WorkNeighborhood, Validators.nullValidator],  
      workNumber :  [data.WorkNumber, Validators.nullValidator],
      workComplement : [data.Complement, Validators.nullValidator],
      workCEP : [data.CEP, Validators.nullValidator],
      cPF : [data.CPF, Validators.nullValidator],
      rG : [data.RG, Validators.nullValidator],
      work : [data.Work, Validators.nullValidator],
      dateOfBirth : [data.DateOfBirth, Validators.nullValidator],
      partnerName : [data.PartnerName, Validators.nullValidator],
      partnerWork : [data.PartnerWork, Validators.nullValidator],
      partnerPhone : [data.PartnerPhone, Validators.nullValidator],
      partnerSalary : [data.PartnerSalary, Validators.nullValidator],
      parentsObservation : [data.ParentsObservation, Validators.nullValidator],
      othersStores : [data.OthersStores, Validators.nullValidator],
      friendName : [data.FriendName, Validators.nullValidator],
      friendsPhone : [data.FriendsPhone, Validators.nullValidator],
      fileObservation : [data.FileObservation, Validators.nullValidator]
    }) 
  }

  setNullFormVariable(){
    this.form = this.formBuilder.group({
      creationDate:[null, Validators.nullValidator],
      number:[null, Validators.required],
      creationFileDate:[null, Validators.required],
      name:[null, Validators.required],
      city : [null, Validators.nullValidator],
      street :  [null, Validators.nullValidator], 
      neighborhood : [null, Validators.nullValidator],
      houseNumber : [null, Validators.nullValidator],
      complement : [null, Validators.nullValidator],
      cEP : [null, Validators.nullValidator],
      phoneNumber : [null, Validators.nullValidator],
      profession : [null, Validators.nullValidator],
      salary : [null, Validators.nullValidator],
      workCity : [null, Validators.nullValidator],
      workStreet : [null, Validators.nullValidator],  
      workNeighborhood : [null, Validators.nullValidator],  
      workNumber :  [null, Validators.nullValidator],
      workComplement : [null, Validators.nullValidator],
      workCEP : [null, Validators.nullValidator],
      cPF : [null, Validators.nullValidator],
      rG : [null, Validators.nullValidator],
      work : [null, Validators.nullValidator],
      dateOfBirth : [null, Validators.nullValidator],
      partnerName : [null, Validators.nullValidator],
      partnerWork : [null, Validators.nullValidator],
      partnerPhone : [null, Validators.nullValidator],
      partnerSalary : [null, Validators.nullValidator],
      parentsObservation : [null, Validators.nullValidator],
      othersStores : [null, Validators.nullValidator],
      friendName : [null, Validators.nullValidator],
      friendsPhone : [null, Validators.nullValidator],
      fileObservation : [null, Validators.nullValidator]
    }) 
  }

}


