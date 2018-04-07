import {BrowserModule} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {HttpHandler} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {HttpInterceptor} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from '../components/application/app.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {ProfileComponent} from '../components/profile/profile.component';

import {AuthService} from "../services/auth.service";
import {AccountService} from "../services/account.service";
import {UrlPermission} from "../urlPermission/url.permission";

import {CustomMaterialModule} from "./material.module";
import {routing} from "./app.routing";


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpModule,
    FormsModule,
    routing,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    AuthService,
    AccountService,
    UrlPermission
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
