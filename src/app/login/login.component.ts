import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';
import { MockUserSearchService } from '../services/mocks/mock.user.search.service';
import { AbstractSearchService } from '../services/abstract.search.service';
import { IHasId } from '../models/IHasId';
import { UserSearchService, SEARCH_SERVICE_TOKEN } from '../services/user.search.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [
    { provide: SEARCH_SERVICE_TOKEN, useClass: MockUserSearchService }
  ],
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  private userSearchService;

  constructor(private authService: AuthService,
    @Inject(SEARCH_SERVICE_TOKEN) userSearchService: UserSearchService) {
    this.userSearchService = userSearchService;
    console.log(userSearchService._endpoint)
  }


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

  public options: string[]

  search() {
    let emailaddress = this.email.value as string;
    this.userSearchService.searchAll(emailaddress)
      .subscribe((results) => this.options = results.map((result) => result.email))
  }

  ngOnInit() { }

  login() {
    this.authService.login(
      this.email.value, this.password.value
    ).subscribe(x => console.log(x.email));
  }

}
