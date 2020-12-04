import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exclusion-confirmation',
  templateUrl: './exclusion-confirmation.component.html',
  styleUrls: ['./exclusion-confirmation.component.scss']
})
export class ExclusionConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExclusionConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  close(){
    this.dialogRef.close(false);
  }

  confirm(){
    this.dialogRef.close(true);
  }

}
