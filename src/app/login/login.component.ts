import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  _message: string = "";
  e: string;
  p: string;

  constructor() {
    this._message = "hello world";
  }

  ngOnInit() {
  }

  doLogin() {
    console.log("i done a login");
  }

}
