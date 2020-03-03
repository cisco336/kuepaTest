import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoogleButtonComponent implements OnInit, AfterViewInit {
  private clientId = '1015227159843-cd0fllma4v8hplabge6jqdbp1mq10l0u.apps.googleusercontent.com';
  private scope = [
    // 'profile',
    'email',
    // 'https://www.googleapis.com/auth/plus.me',
    // 'https://www.googleapis.com/auth/contacts.readonly',
    // 'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;

  // public googleInit() {
  //   gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: this.clientId,
  //       cookie_policy: 'single_host_origin',
  //       scope: this.scope
  //     });
  //     this.attachSignin(this.element.nativeElement.firstChild);
  //   });
  // }

  // public attachSignin(element) {
  //   this.auth2.attachClickHandler(
  //     element,
  //     {},
  //     googleUser => {
  //       const profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       // ...
  //     },
  //     error => {
  //       console.log(JSON.stringify(error, undefined, 2));
  //     }
  //   );
  // }
  constructor(private element: ElementRef) {
    // console.log('ElementRef: ', this.element);
  }

  ngAfterViewInit() {
    // this.googleInit();
  }

  ngOnInit() {}
}
