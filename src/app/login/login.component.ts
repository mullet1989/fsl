import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  password = new FormControl('', [Validators.required, Validators.pattern(/benjamin/i)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  private _emailValidationMessage: string = "";
  get emailValidationMessage(): string {
    return this.email.invalid ? "need to correct this" : "";
  }

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  login() {
    //this.authService.login(this.email.value, this.password).subscribe(x => console.log(x.email));
  }

}
