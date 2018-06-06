import {Injectable, OnDestroy} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {Role, User} from '../model/model.user';
import {IAppState} from '../model/redux.store';


@Injectable()
export class UrlPermission implements CanActivate,  OnDestroy {
  
  @select() readonly isAuthentecated: Observable<boolean>;
  @select() readonly user: Observable<User>;
  isAuthSub;
  userSub;
  
  isAuth: boolean;
  currentUser: User;
  
  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.userSub = this.user.subscribe(state => this.currentUser = state);
    this.isAuthSub = this.isAuthentecated.subscribe(state => this.isAuth = state);
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuth) {
      //const role: Role = this.currentUser.role;
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
  
  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
