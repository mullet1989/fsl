import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { UserSearchService } from '../services/user.search.service';
import { SearchServiceEndpoint, UserSearchServiceEndpoint, AthleteSearchServiceEndpoint } from '../app.config';


@Component({
  selector: 'app-login',
  providers: [
    { provide: SearchServiceEndpoint, useValue: UserSearchServiceEndpoint },
    { provide: UserSearchService, useClass: UserSearchService },
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private emailSearchService: UserSearchService) { }


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

  }

  options = [
    'One',
    'Two',
    'Three'
  ];

  ngOnInit() { }

  login() {
    this.authService.login(
      this.email.value, this.password.value
    ).subscribe(x => console.log(x.email));
  }

}
