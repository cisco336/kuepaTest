import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {}

  close(yes?) {
    this.dialogRef.close(yes);
  }

  confirm() {
    this.close(true);
  }
}
