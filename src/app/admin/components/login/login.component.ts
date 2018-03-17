import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
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
  model = new LoginModel();

  constructor(private authService: AuthService,
    @Inject(SEARCH_SERVICE_TOKEN) userSearchService: UserSearchService) {
    this.userSearchService = userSearchService;
    console.log(userSearchService._endpoint)
  }

  public options: string[] = [""];

  search() {
    let emailaddress: string = this.model.email;
    this.userSearchService.searchAll(emailaddress)
      .subscribe((results) => {
        var emailAddresses: string[] = results.map((result) => result.email);
        this.options = emailAddresses ? emailAddresses : [];
      })
  }

  ngOnInit() { }

  login() {
    try {
      let emailValue: string = this.model.email;
      let passwordValue: string = this.model.password;
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

class LoginModel {
  email: string;
  password: string;
}
