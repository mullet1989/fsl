import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _message = "";
  constructor() {
    this._message = "hello world";
  }

  ngOnInit() {
  }

  doLogin() {
    console.log("i done a login");
  }

}
