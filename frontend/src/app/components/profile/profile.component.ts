import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/model.user";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.currentUser = authService.getUser();
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
  }
}
