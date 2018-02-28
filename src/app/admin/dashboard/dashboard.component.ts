import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  title: string = "this is the dashboard"
  msg: string = "welcome to you"

  constructor() { }

  ngOnInit() {
  }

}
