import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User, Role} from "../model/model.user";
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

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
        const user = response['principal'];
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
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
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/login');
      });
  }

  public isAuthentecated():boolean {
    return JSON.parse(localStorage.getItem('currentUser')) ? true : false;
  }

  public getUser(): User {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return user ? user : null;
  }
  
  public getRole(): Role{
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return  user ? user.role : null;
  }
}
