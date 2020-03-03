import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TableComponent } from './components/table/table.component';
import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { AddRecordComponent } from './dialogs/add-record/add-record.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { NotificationComponent } from './dialogs/notification/notification.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MenuTogglerComponent } from './components/menu-toggler/menu-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ReportsComponent,
    ContactComponent,
    TableComponent,
    GoogleButtonComponent,
    AddRecordComponent,
    ConfirmComponent,
    NotificationComponent,
    UserMenuComponent,
    MenuTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule
  ],
  entryComponents: [AddRecordComponent, ConfirmComponent, NotificationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
