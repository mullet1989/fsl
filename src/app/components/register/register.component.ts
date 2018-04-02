
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UserSearchService, SEARCH_SERVICE_TOKEN } from '../../admin/services/search/user.search.service';
import { LoginRegisterModel } from '../../models/LoginRegisterModel';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [
    { provide: SEARCH_SERVICE_TOKEN, useClass: UserSearchService }
  ],
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router) { }

  model: LoginRegisterModel = new LoginRegisterModel();

  ngOnInit() { }

  register() {
    this._auth.register(
      this.model.email,
      this.model.password
    ).subscribe((payload) => {
      if (payload) {
        this._auth.isLoggedIn = true;
        this._router.navigate(["/admin/dashboard"]);
      }
    })
  }

}
