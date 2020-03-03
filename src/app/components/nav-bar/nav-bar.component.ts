import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  links = [
    { text: 'Home', link: '' },
    { text: 'Reports', link: 'reports' },
    { text: 'Contact Us', link: 'contact' }
  ];
  activeLink = this.links[0];
  mobile: boolean;

  /** Event listener to check windows inner width */
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.mobile = event.target.innerWidth <= 660;
  }

  constructor(private activeRoute: Router) {}

  ngOnInit() {
    this.activeRoute.navigate(['/']);
    this.mobile = window.innerWidth <= 660;
  }
}
