import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseModalComponent } from 'src/app/shared/AbstractComponent/base-modal.component';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent extends BaseModalComponent<Product> {

  form: FormGroup = this.formBuilder.group({});
  isEditing: boolean = false;
  componentTypes: Array<string> = ["Óculos de sol", "Armação", "Lente" , "Consulta", "Outros"];
  
  constructor(public dialogRef: MatDialogRef<ProductModalComponent>,
    public service: ProductService, public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Product) {    
     
      super(dialogRef,service, formBuilder)

      this.data = data;
      
    }

  setFormVariable(data:Product){
    this.form = this.formBuilder.group({
      number:[data.Number,Validators.required],
      name:[data.Name, Validators.required],
      type:[data.Type, Validators.nullValidator],
      observation:[data.Observation, Validators.nullValidator],
      value:[data.Value,Validators.nullValidator]
    });
  }

  setNullFormVariable(){
    this.form = this.formBuilder.group({
      number:[null,Validators.required],
      name:[null, Validators.required],
      type:["Armação", Validators.nullValidator],
      observation:[null, Validators.nullValidator],
      value:[null,Validators.nullValidator]
    });
  }
}
