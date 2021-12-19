import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit, AfterViewInit {
  navbarOpen = false;
  mobile = false;

  constructor(
    private responsive: ResponsiveService
  ) {
    // not-todo
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mobile = this.responsive.getIsMobileResolution();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
