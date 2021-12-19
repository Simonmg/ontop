import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, AfterViewInit {
  status = 'active';

  datas = [
    {
      imgUrl: '/assets/images/people.jpg',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: '$200 USD',
      Status: 'active'
    },
    {
      imgUrl: '/assets/images/people.jpg',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: '$200 USD',
      Status: 'active'
    },
    {
      imgUrl: '/assets/images/people.jpg',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: '$200 USD',
      Status: 'pending'
    }
  ];

  media: boolean = false;

  constructor(
    private responsive: ResponsiveService
  ) {
    this.media = this.responsive.getIsMobileResolution();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public openMenu() {
    console.log('menu');
  }
}
