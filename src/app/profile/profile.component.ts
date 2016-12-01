import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: Object

  constructor() { }

  ngOnInit() {
    this.user = {
      first_name: 'James',
      last_name: 'Wonder',
      city: 'Nashville',
      state: 'TN',
      height: "5'11",
      weight: 215,
      gym: 'Crossfit'
    }
  }


}
