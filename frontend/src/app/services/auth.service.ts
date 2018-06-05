import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgRedux} from '@angular-redux/store';

import {User, Role} from "../model/model.user";
import {IAppState} from '../model/redux.store';
import {AppActions} from '../module/app.actions';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions,
    private router: Router
  ) {
    this.checkState();
  }

  public logIn(user: User, callback) {

    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    this.http.get("/api/account/login", {headers: headers}).subscribe(response => {
      if (response && response['principal']) {
        this.ngRedux.dispatch(this.actions.authenticat(response['principal']));
        return callback && callback();
      } else {
        this.ngRedux.dispatch(this.actions.unauthenticat());
        callback('UserNotFound');
      }
    });
  }

  public logOut() {
    this.http.post('/api/account/logout', {}).subscribe(() => {
      this.ngRedux.dispatch(this.actions.unauthenticat());
      this.router.navigateByUrl('/login');
    });
  }

  private checkState() {
    this.http.get("/api/account/login/status").subscribe(response => {
      if (response && response['principal']) {
        this.ngRedux.dispatch(this.actions.authenticat(response['principal']));
      } else {
        this.ngRedux.dispatch(this.actions.unauthenticat());
      }
    });
  }
}
