import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from "../model/model.user";
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  authenticated = false;

  private user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public logIn(user: User, callback) {

    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    this.http.get("/api/account/login", {headers: headers})
      .subscribe(response => {
        this.user = response['principal'];
        console.log(this.user);
        if (this.user) {
          return callback && callback();
        } else {
          callback('UserNotFound');
        }
      }, error => {
        callback(error);
      });
  }

  public logOut() {
    this.http.post('/api/account/logout', {})
      .subscribe(() => {
        this.authenticated = false;
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/login');
      });
  }

  public isAuthentecated() {
    return this.authenticated;
  }

  public getUser() {
    return this.user;
  }
}
