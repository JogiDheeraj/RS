//angular dependency import
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Injectable, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpRequest, HttpHandler, HTTP_INTERCEPTORS, HttpInterceptor, HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
//external dependency import
import {NgxCarouselModule} from 'ngx-carousel';
//application components import
import {AppComponent} from '../components/application/app.component';
import {MenuComponent} from '../components/menu/menu.component';
import {IndexComponent} from '../components/index/index.component';
import {CarouselComponent} from '../components/carousel/carousel.component';
import {PageHeaderComponent} from '../components/page-header/page-header.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {LangSelectorComponent} from '../components/lang-selector/lang-selector.component';
import {ArticleComponent} from '../components/article/article.component';
import {MailListComponent} from '../components/mail-list/mail-list.component';
import {FooterComponent} from '../components/footer/footer.component';
import {AccountComponent} from "../components/account/account.component";
import {AccountIndexComponent} from "../components/account-index/account-index.component";
import {SearchComponent} from "../components/search/search.component";
import {SectionComponent} from '../components/section/section.component';
import {AboutComponent} from '../components/about/about.component';
import {ContactComponent} from '../components/contact/contact.component';
import {BlogComponent} from '../components/blog/blog.component';
//application Service import
import {AuthService} from "../services/auth.service";
import {AccountService} from "../services/account.service";
import {WindowsProviders} from "../services/window.service";
import {SectionService} from '../services/section.service';
//application Pipes import
import {TimeStampPipe} from '../pipes/timeStamp';
//application Modules import
import {CustomMaterialModule} from "./material.module";
import {routing} from "./app.routing";
//application specials import
import {UrlPermission} from "../urlPermission/url.permission";


// The function responsible of loading the Translation files
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//Intercept the Spring Login X-Requested-With:XMLHttpRequest login form
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
    MenuComponent,
    PageHeaderComponent,
    IndexComponent,
    CarouselComponent,
    ArticleComponent,
    TimeStampPipe,
    MailListComponent,
    FooterComponent,
    LangSelectorComponent,
    AccountComponent,
    AccountIndexComponent,
    SearchComponent,
    SectionComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent
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
    routing,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    AccountService,
    UrlPermission,
    WindowsProviders,
    SectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

