import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {User} from '../../model/model.user';
import {IAppState} from '../../model/redux.store';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent {

   @select() readonly user: Observable<User>;

  constructor(
    private authService: AuthService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  public logOut() {
    this.authService.logOut();
  }

  public reload() {

  }
}
