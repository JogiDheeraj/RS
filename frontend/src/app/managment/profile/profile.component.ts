import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {User} from "../../model/model.user";
import {IAppState} from '../../model/redux.store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {

  @select() readonly currentUser: Observable<User>;

  constructor(private ngRedux: NgRedux<IAppState>) { }
}
