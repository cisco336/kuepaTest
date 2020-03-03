import { Component, OnInit, Input, OnChanges, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatDialog } from '@angular/material';
import { ComponentService } from 'src/app/services/component.service';
import { DIALOGS } from 'src/app/constants/dialogs';
import { detailExpand } from 'src/app/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [detailExpand]
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  displayedColumns;
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private componentService: ComponentService) {}
  mobile: boolean;
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.mobile = event.target.innerWidth <= 660;
    this.renderData();
  }
  ngOnInit() {}

  ngOnChanges() {
    this.renderData();
  }

  renderData() {
    this.dataSource = new MatTableDataSource();
    if (this.data !== null) {
      let temp = [...Object.keys(this.data[0])];
      if (window.innerWidth <= 660) {
        temp = [...temp.slice(0, 2)];
        this.displayedColumns = this.data.length > 0 ? [...temp, 'Actions'] : [];
      } else {
        this.displayedColumns = this.data.length > 0 ? ['#', ...temp, 'Actions'] : [];
      }
      this.dataSource.data = [...this.data];

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData(i) {
    if (this.componentService.records.value[i] !== undefined) {
      this.componentService
        .openDialog(DIALOGS.COMFIRM, { data: 'Are you sure you want to delete the selected record?' })
        .subscribe(response => {
          if (response) {
            this.data.splice(i, 1);
            this.componentService.records.next(this.data);
            this.renderData();
            localStorage.setItem('kuepaData', JSON.stringify(this.data));
          } else {
            return;
          }
        });
    }
  }
}
