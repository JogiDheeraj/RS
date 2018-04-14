import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {User} from "../../model/model.user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  user: User = new User();
  serverErrorMessage: string;
  showSpinner = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.showSpinner = true;
    this.authService.logIn(this.user, (error) => {
      this.showSpinner = true;
      if (error) {
        console.log(error);
        this.serverErrorMessage = error.message;
      } else {
        this.router.navigate(['/profile']);
      }
    });
  }
}
