import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Role, User } from '../model/model.user';
import { IAppState } from '../model/redux.store';
import { AuthService } from '../services/auth.service';
import { aclData } from './acl.data';


@Injectable()
export class AclResolve implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auth.isAuthenticated()) {
      if (this.can(this.auth.getCurrentUser(), route.pathFromRoot)) {
        return true;
      } else {
        this.router.navigate(['/account/unauthorized']);
      }
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return false;
  }

  private can(user: User, route: Array<ActivatedRouteSnapshot>): boolean {
    let urlString = "", sperator = "";
    for (let i = 0; i < route.length; i++) {
      urlString += sperator + route[i].url.toString();
      sperator = "/"
    }
    return aclData[user.role].includes(urlString);
  }

}
