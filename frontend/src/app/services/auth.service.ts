import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User, Role} from "../model/model.user";
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  authenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.http.get("/api/account/login/status").subscribe(response => {
      if (response && response['principal']) {
        localStorage.setItem('currentUser', JSON.stringify(response['principal']));
        this.authenticated = true;
      } else {
        localStorage.removeItem('currentUser');
        this.authenticated = false;
      }
    });
  }

  public logIn(user: User, callback) {

    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    this.http.get("/api/account/login", {headers: headers})
      .subscribe(response => {
        if (response && response['principal']) {
          localStorage.setItem('currentUser', JSON.stringify(response['principal']));
          this.authenticated = true;
          return callback && callback();
        } else {
          this.authenticated = false;
          callback('UserNotFound');
        }
      }, error => {
        callback(error);
      });
  }

  public logOut() {
    this.http.post('/api/account/logout', {})
      .subscribe(() => {
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/login');
      });
  }

  public isAuthentecated(): boolean {
    return this.authenticated;
  }

  public getUser(): User {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return user ? user : null;
  }

  public getRole(): Role {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return user ? user.role : null;
  }
}
