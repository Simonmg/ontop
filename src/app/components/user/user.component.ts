import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  url = '/assets/images/people.jpg';
  constructor() {
    // not to-do
  }

  ngOnInit(): void {
  }
}
