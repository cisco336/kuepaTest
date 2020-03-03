import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';
import { DIALOGS } from 'src/app/constants/dialogs';
import { Record } from 'src/app/models/records.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  tableData: Record[] = [];
  constructor(private componentService: ComponentService) {}

  ngOnInit() {
    this.getData();
    this.componentService.records.subscribe(records => (this.tableData = records));
  }

  addRecord() {
    this.componentService.openDialog(DIALOGS.ADD_RECORD, null).subscribe(data => {
      if (data) {
        const newData = this.tableData !== null ? [...this.tableData, data] : [data];
        this.componentService.records.next(newData);
        localStorage.setItem('kuepaData', JSON.stringify(newData));
      }
    });
  }

  clear() {
    const message = 'Are you sure you want to clear all the data?';
    this.componentService.openDialog(DIALOGS.COMFIRM, { data: message }).subscribe(confirm => {
      if (confirm) {
        localStorage.clear();
        this.tableData = [];
      }
    });
  }

  getData() {
    if (localStorage.getItem('kuepaData') !== '') {
      this.tableData = JSON.parse(localStorage.getItem('kuepaData'));
      this.componentService.records.next(this.tableData);
    }
  }
}
