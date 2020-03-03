import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, BehaviorSubject } from 'rxjs';
import { DIALOGS } from '../constants/dialogs';
import { AddRecordComponent } from '../dialogs/add-record/add-record.component';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { NotificationComponent } from '../dialogs/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  records = new BehaviorSubject<any>(null);

  constructor(public dialog: MatDialog) {}

  openDialog(componentID: string, data: any): Observable<any> {
    let component: any;
    let dialogSubscription;
    switch (componentID) {
      case DIALOGS.ADD_RECORD:
        component = AddRecordComponent;
        break;
      case DIALOGS.COMFIRM:
        component = ConfirmComponent;
        break;
      case DIALOGS.NOTIFICATION:
        component = NotificationComponent;
        break;
      default:
        component = null;
        break;
    }
    const dialogRef = this.dialog.open(component, data);
    dialogSubscription = dialogRef.afterClosed();
    return dialogSubscription;
  }
}
