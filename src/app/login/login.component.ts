import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { USER_SEARCH_TOKEN } from '../services/user.search.service';
import { User } from '../models/user';
import { MockUserSearchService } from '../services/mocks/mock.user.search.service';

@Component({
  selector: 'app-login',
  providers: [
    { provide: MockUserSearchService, useClass: MockUserSearchService },
    { provide: USER_SEARCH_TOKEN, useValue: "/user" }
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private userSearchService: MockUserSearchService) { }


  password = new FormControl('', [Validators.required, Validators.pattern(/benjamin/i)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  private _emailValidationMessage: string = "";
  get emailValidationMessage(): string {
    return this.email.invalid ? "need to correct this" : "";
  }

  private _passwordValidationMessage: string = "";
  get passwordValidationMessage(): string {
    return this.password.invalid ? "your password sucks" : "";
  }

  search() {
    let emailaddress = this.email.value as string;
    this.userSearchService.searchAll(emailaddress)
      .subscribe((results) => console.log(results))
  }

  ngOnInit() { }

  login() {
    this.authService.login(
      this.email.value, this.password.value
    ).subscribe(x => console.log(x.email));
  }

}
