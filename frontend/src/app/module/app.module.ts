//angular dependency import
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Injectable, NgModule, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//external dependency import
import {NgxCarouselModule} from 'ngx-carousel';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

//application components import
import {AppComponent} from '../components/app.component';
import {MenuComponent} from '../components/menu/menu.component';
import {IndexComponent} from '../components/index/index.component';
import {CarouselComponent} from '../components/index/carousel/carousel.component';
import {PageHeaderComponent} from '../components/page-header/page-header.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {LangSelectorComponent} from '../components/menu/lang-selector/lang-selector.component';
import {ArticleComponent} from '../components/article/article.component';
import {MailListComponent} from '../components/mail-list/mail-list.component';
import {FooterComponent} from '../components/footer/footer.component';
import {SearchComponent} from "../components/search/search.component";
import {SectionComponent} from '../components/section/section.component';
import {AboutComponent} from '../components/about/about.component';
import {ContactComponent} from '../components/contact/contact.component';
import {BlogComponent} from '../components/blog/blog.component';
import {QuikSearchComponent} from '../components/menu/quik-search/quik-search.component';
import {AccountComponent} from "../managment/account/account.component";
import {AccountHeaderComponent} from "../managment/account/account-header/account-header.component";
import {AccountIndexComponent} from "../managment/account/account-index/account-index.component";
import {AccountMenuComponent} from '../managment/account/account-menu/account-menu.component';
import {MyAdvComponent} from '../managment/articles/my-adv/my-adv.component';
import {NewAdvComponent} from '../managment/articles/new-adv/new-adv.component';
import {ProfileComponent} from '../managment/account/account-profile/profile.component';
import {SectionsComponent} from '../managment/section/sections/sections.component';
import {SecurityComponent} from '../managment/account/account-security/security.component';
import {SettingsComponent} from '../managment/settings/settings.component';
import {UsersComponent} from '../managment/users/users.component';
import {SectionEditDialogComponent} from '../managment/section/section-edit-dialog/section-edit-dialog.component';
import {ConfirmDialogComponent} from '../managment/confirm-dialog/confirm-dialog.component';
import {ImageInputComponent} from '../managment/input-image/image-input.component';
import {FormUploadComponent} from '../managment/form-upload/form-upload.component';
import {ImgageSelectorDialogComponent} from '../managment/imgage-selector-dialog/imgage-selector-dialog.component';
import {WebspiderComponent} from '../managment/webspider/webspider.component';

//application Service import
import {AuthService} from "../services/auth.service";
import {AccountService} from "../services/account.service";
import {WindowsProviders} from "../services/window.service";
import {SectionService} from '../services/section.service';
import {FileService} from '../services/file.service';
import {UserService} from '../services/users.service';
import {WebSpiderService} from '../services/webspider.service';
import {WebSocketService} from '../services/websocket.service';

//application Pipes import
import {TimeStampPipe} from '../pipes/timeStamp';

//application Modules import
import {CustomMaterialModule} from "./material.module";

//application Directives import
import {EqualValidatorDirective} from '../directives/equal-validator.directive';
import {ForRolesDirective} from '../directives/is-admin.directive';

import {IAppState, rootReducer, INITIAL_STATE} from '../model/redux.store';

//application specials import
import {AclResolve} from "../permission/acl.resolve";
import {AppActions} from './app.actions';
import {TranslatePaginatorIntl} from './translate-paginator-intl';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {RoutingModule} from './app.routing';
import {HttpPrivateInterceptor} from './http-private.interceptor';

// The function responsible of loading the Translation files
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MenuComponent,
    PageHeaderComponent,
    IndexComponent,
    CarouselComponent,
    ArticleComponent,
    TimeStampPipe,
    MailListComponent,
    FooterComponent,
    LangSelectorComponent,
    EqualValidatorDirective,
    ForRolesDirective,
    AccountComponent,
    AccountIndexComponent,
    SearchComponent,
    SectionComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    AccountComponent,
    AccountIndexComponent,
    AccountMenuComponent,
    AccountHeaderComponent,
    SectionsComponent,
    SecurityComponent,
    SettingsComponent,
    UsersComponent,
    MyAdvComponent,
    NewAdvComponent,
    SectionEditDialogComponent,
    ConfirmDialogComponent,
    ImgageSelectorDialogComponent,
    QuikSearchComponent,
    ImageInputComponent,
    FormUploadComponent,
    WebspiderComponent
  ],
  entryComponents: [
    SectionEditDialogComponent,
    ConfirmDialogComponent,
    ImgageSelectorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    FormsModule,
    NgxCarouselModule,
    RoutingModule,
    NgReduxModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpPrivateInterceptor, multi: true},
    {provide: MatPaginatorIntl, useValue: TranslatePaginatorIntl()},
    AuthService,
    AppActions,
    WindowsProviders,
    AccountService,
    SectionService,
    AclResolve,
    FileService,
    UserService,
    WebSpiderService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  //initialize the Redux main Store Object
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private auth: AuthService
  ) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
    auth.authenticate();
  }

}

