import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.maxLength(13)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(public dialogRef: MatDialogRef<AddRecordComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {}

  close(dataTosend?) {
    this.dialogRef.close(dataTosend);
  }
  save() {
    this.close(this.addForm.value);
  }
}
