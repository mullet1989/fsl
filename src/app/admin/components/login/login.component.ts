import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { SEARCH_SERVICE_TOKEN, UserSearchService } from '../../services/search/user.search.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [
    { provide: SEARCH_SERVICE_TOKEN, useClass: UserSearchService }
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

  public options: string[] = [""];

  search() {
    let emailaddress: string = this.email.value;
    this.userSearchService.searchAll(emailaddress)
      .subscribe((results) => {
        var emailAddresses: string[] = results.map((result) => result.email);
        this.options = emailAddresses ? emailAddresses : [];
      })
  }

  ngOnInit() { }

  login() {
    try {
      let emailValue: string = this.email.value;
      let passwordValue: string = this.password.value;
      this.authService.login(emailValue, passwordValue)
        .subscribe((payload) => {
          if (payload) {
            console.log("you logged in ");
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

}
