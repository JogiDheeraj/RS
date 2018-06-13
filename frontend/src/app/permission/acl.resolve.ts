import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Role, User} from '../model/model.user';
import {IAppState} from '../model/redux.store';
import {AuthService} from '../services/auth.service';
import {aclData} from './acl.data';


@Injectable()
export class AclResolve implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const clone = Object.assign({}, route);
    console.log(clone);
    console.log(route.url.toString());

    if (
      this.auth.isAuthenticated() ||
      this.can(this.auth.getCurrentUser(), route.url.toString())
    ) {
      //this.aclService.can('manage_content')
      //const role: Role = this.currentUser.role;
      return true;
    }

    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

  private can(user: User, rout: string): boolean {
    return true;
  }

}
