import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
//import {FacebookModule} from "ngx-facebook";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';

import {AuthService} from "./services/auth.service";
import {AccountService} from "./services/account.service";
import {UrlPermission} from "./urlPermission/url.permission";

import {CustomMaterialModule} from "./material.module";
import {routing} from "./app.routing";



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
    //FacebookModule.forRoot(),
  ],
  providers: [
    AuthService,
    AccountService,
    UrlPermission
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
