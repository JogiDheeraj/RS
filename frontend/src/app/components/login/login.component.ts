import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {User} from "../../model/model.user";
import {AuthService} from "../../services/auth.service";
import {Router, ActivatedRoute} from "@angular/router";


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
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        console.log(params);
        this.returnUrl = params.order;
        console.log(this.returnUrl);
      });
  }

  login() {
    this.showSpinner = true;
    this.authService.logIn(this.user, (error) => {
      this.showSpinner = true;
      if (error) {
        console.log(error);
        this.serverErrorMessage = error.message;
      } else {
        this.router.navigate([this.returnUrl ? this.returnUrl : '/account/home']);
      }
    });
  }
}
