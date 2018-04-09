import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Injectable} from '@angular/core';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

import {AppComponent} from '../components/application/app.component';
import {MenuComponent} from '../components/menu/menu.component';
import {IndexComponent} from '../components/index/index.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {CarouselComponent} from '../components/carousel/carousel.component';
import {ArticleComponent} from '../components/article/article.component';

import {AuthService} from "../services/auth.service";
import {AccountService} from "../services/account.service";
import {UrlPermission} from "../urlPermission/url.permission";

import {TimeStampPipe} from '../pipes/timeStamp';

import {CustomMaterialModule} from "./material.module";
import {routing} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MenuComponent,
    IndexComponent,
    CarouselComponent,
    ArticleComponent,
    TimeStampPipe
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
    AuthService,
    AccountService,
    UrlPermission
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
