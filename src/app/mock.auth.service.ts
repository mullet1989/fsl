import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { AuthService } from './auth.service';

@Injectable()
export class MockAuthService extends AuthService {

  isLoggedIn = true;

}
