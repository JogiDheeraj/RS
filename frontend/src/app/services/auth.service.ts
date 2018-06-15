import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

import { User, Role } from "../model/model.user";
import { IAppState } from '../model/redux.store';
import { AppActions } from '../module/app.actions';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions,
    private router: Router
  ) { }

  public logIn(user: User, callback) {

    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    this.http.get("/api/account/login", { headers: headers }).subscribe(response => {
      if (response && response['principal']) {
        this.ngRedux.dispatch(this.actions.authenticat(response['principal']));
        localStorage.setItem('currentUser', JSON.stringify(response['principal']));
        return callback && callback();
      } else {
        this.ngRedux.dispatch(this.actions.unauthenticat());
        localStorage.removeItem('currentUser');
        callback('UserNotFound');
      }
    });
  }

  public logOut() {
    this.http.post('/api/account/logout', {}).subscribe(() => {
      this.ngRedux.dispatch(this.actions.unauthenticat());
      localStorage.removeItem('currentUser');
      this.router.navigateByUrl('/');
    });
  }

  public authenticate() {
    this.http.get("/api/account/login/status")
      .subscribe(response => {
        if (response && response['principal']) {
          this.ngRedux.dispatch(this.actions.authenticat(response['principal']));
          localStorage.setItem('currentUser', JSON.stringify(response['principal']));
        } else {
          localStorage.removeItem('currentUser');
          this.ngRedux.dispatch(this.actions.unauthenticat());
        }
      });
  }

  public isAuthenticated() {

    if (localStorage.getItem('currentUser')) {
      return true;
    }

    // this second check will happen gust in two cases :
    // 1. a URL which required authentication is called in the first time App load
    // 2. a URL which required authentication called many times and no authentication
    // the second case should not happen, the URL should be rerouted to login page
    this.sleep(500);
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    return false;
  }

  public getCurrentUser(): User {
    return localStorage.getItem('currentUser') ?
      JSON.parse(localStorage.getItem('currentUser')) :
      null;
  }

  private sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

}
