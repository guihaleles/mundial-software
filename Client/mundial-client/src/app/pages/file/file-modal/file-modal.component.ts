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
        this.setVariable(data);
        this.isEditing = true;
      }
      else{
        this.setNullVariable()
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
    throw Error("Update não implementado ainda");
  }

  setVariable(data:File){
    this.form = this.formBuilder.group({
      creationDate:[data.CreationDate, Validators.required],
      number:[data.Number, Validators.required],
      creationFileDate:[data.CreationFileDate, Validators.required],
      name:[data.Name, Validators.required],
      city : [data.City, Validators.required],
      street :  [data.Street, Validators.required], 
      neighborhood : [data.Neighborhood, Validators.required],
      houseNumber : [data.HouseNumber, Validators.required],
      complement : [data.Complement, Validators.required],
      cEP : [data.CEP, Validators.required],
      phoneNumber : [data.PhoneNumber, Validators.required],
      profession : [data.Profession, Validators.required],
      salary : [data.Salary, Validators.required],
      workCity : [data.WorkCity, Validators.required],
      workStreet : [data.WorkStreet, Validators.required],  
      workNeighborhood : [data.WorkNeighborhood, Validators.required],  
      workNumber :  [data.WorkNumber, Validators.required],
      workComplement : [data.Complement, Validators.required],
      workCEP : [data.CEP, Validators.required],
      cPF : [data.CPF, Validators.required],
      rG : [data.RG, Validators.required],
      work : [data.Work, Validators.required],
      dateOfBirth : [data.DateOfBirth, Validators.required],
      partnerName : [data.PartnerName, Validators.required],
      partnerWork : [data.PartnerWork, Validators.required],
      partnerPhone : [data.PartnerPhone, Validators.required],
      partnerSalary : [data.PartnerSalary, Validators.required],
      parentsObservation : [data.ParentsObservation, Validators.required],
      othersStores : [data.OthersStores, Validators.required],
      friendName : [data.FriendName, Validators.required],
      friendsPhone : [data.FriendsPhone, Validators.required],
      fileObservation : [data.FileObservation, Validators.required]
    }) 
  }

  setNullVariable(){
    this.form = this.formBuilder.group({
      creationDate:[null, Validators.required],
      number:[null, Validators.required],
      creationFileDate:[null, Validators.required],
      name:[null, Validators.required],
      city : [null, Validators.required],
      street :  [null, Validators.required], 
      neighborhood : [null, Validators.required],
      houseNumber : [null, Validators.required],
      complement : [null, Validators.required],
      cEP : [null, Validators.required],
      phoneNumber : [null, Validators.required],
      profession : [null, Validators.required],
      salary : [null, Validators.required],
      workCity : [null, Validators.required],
      workStreet : [null, Validators.required],  
      workNeighborhood : [null, Validators.required],  
      workNumber :  [null, Validators.required],
      workComplement : [null, Validators.required],
      workCEP : [null, Validators.required],
      cPF : [null, Validators.required],
      rG : [null, Validators.required],
      work : [null, Validators.required],
      dateOfBirth : [null, Validators.required],
      partnerName : [null, Validators.required],
      partnerWork : [null, Validators.required],
      partnerPhone : [null, Validators.required],
      partnerSalary : [null, Validators.required],
      parentsObservation : [null, Validators.required],
      othersStores : [null, Validators.required],
      friendName : [null, Validators.required],
      friendsPhone : [null, Validators.required],
      fileObservation : [null, Validators.required]
    }) 
  }

}


