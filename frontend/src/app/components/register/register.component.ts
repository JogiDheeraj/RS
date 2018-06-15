import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

import { User } from "../../model/model.user";
import { AccountService } from "../../services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RegisterComponent implements OnInit {

  user: User = new User();
  serverErrorMessage: string;
  showSpinner = false;

  constructor(
    public accountService: AccountService,
    public router: Router
  ) { }

  ngOnInit() { }

  register() {
    this.showSpinner = true;
    this.accountService.createAccount(this.user)
      .subscribe(data => {
        this.showSpinner = false;
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.showSpinner = false;
        this.serverErrorMessage = err;
      }
      )
  }

}
