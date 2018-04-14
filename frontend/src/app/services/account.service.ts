import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from "../model/model.user";
import {AppComponent} from "../components/application/app.component";


@Injectable()
export class AccountService {
  constructor(public http: HttpClient) {}

  createAccount(user: User) {
    return this.http.post('/api/account/register', user);
  }
}
