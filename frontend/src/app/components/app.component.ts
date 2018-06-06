import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private router: Router) {}

  public showPageHeader() {
    return this.router.url.includes('home')
      || this.router.url.includes('account')
      || this.router.url.includes('manage');
  }

}
