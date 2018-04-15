import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {User} from "../../model/model.user";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.getUser();
  }
  
}
