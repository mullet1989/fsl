
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UserSearchService, SEARCH_SERVICE_TOKEN } from '../../admin/services/search/user.search.service';
import { LoginRegisterModel } from '../../models/LoginRegisterModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [
    { provide: SEARCH_SERVICE_TOKEN, useClass: UserSearchService }
  ],
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {


  model: LoginRegisterModel

  ngOnInit() { }



}
