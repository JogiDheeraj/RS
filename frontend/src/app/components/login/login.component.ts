import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {AuthService} from "../../services/auth.service";
import {User} from "../../model/model.user";


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
        this.returnUrl = params.order;
      });
  }

  login() {
    this.showSpinner = true;
    this.authService.logIn(this.user, (error) => {
      this.showSpinner = false;
      if (error) {
        this.serverErrorMessage = error.message;
      } else {
        this.router.navigate([this.returnUrl ? this.returnUrl : '/account/home']);
      }
    });
  }
}
