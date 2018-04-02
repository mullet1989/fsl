import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SEARCH_SERVICE_TOKEN, UserSearchService } from '../../admin/services/search/user.search.service';
import { AuthService } from '../../auth.service';
import { LoginRegisterModel } from '../../models/LoginRegisterModel';

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
  model = new LoginRegisterModel();

  constructor(
    private authService: AuthService,
    @Inject(SEARCH_SERVICE_TOKEN) userSearchService: UserSearchService) {
    this.userSearchService = userSearchService;
  }

  public options: string[] = [""];

  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  search() {
    let emailaddress: string = this.model.email;
    this.userSearchService.searchAll(emailaddress)
      .subscribe((results) => {
        var emailAddresses: string[] = results.map((result) => result.email);
        this.options = emailAddresses ? emailAddresses : [];
      })
  }

  ngOnInit() { }

  /**
   * Logs into the website
   *
   * @memberof LoginComponent
   */
  login() {
    try {
      let emailValue: string = this.model.email;
      let passwordValue: string = this.model.password;
      this.authService.login(emailValue, passwordValue)
        .subscribe((payload) => {
          if (payload) {
            console.log("you logged in ");
          } else {
            console.log("not authenticated")
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

}
