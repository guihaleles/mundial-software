import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SalesmanService } from 'src/app/services/salesman.service';
import { Salesman } from 'src/app/models/salesman';
import { FormGroup, FormBuilder } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  styleUrls: ['./sales-modal.component.scss']
})
export class SalesModalComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<SalesModalComponent>,
    private salesService: SalesmanService, private formBuilder: FormBuilder) {

      this.form = this.formBuilder.group({
        number:[null],
        name:[null]
      })

    }

  ngOnInit(): void {

  }

  save() {
    let values = this.form.value;
    let newSalesman = (new Salesman(new Date(), values.number, values.name));
    newSalesman.Id = 3;
    console.log(newSalesman);
    this.salesService.putSalesman(newSalesman).subscribe(
          (data) => this.dialogRef.close(data),
        );
  }

  close(){
    this.dialogRef.close("Cancelou!!")
  }

}
