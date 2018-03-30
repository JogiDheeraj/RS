import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import {User} from "../model/model.user";
import {AppComponent} from "../app.component";

@Injectable()
export class AccountService {
  constructor(public http: Http) {}

  createAccount(user: User) {
    return this.http.post('/account/register', user)
      .map(resp => resp.json());
  }
}
