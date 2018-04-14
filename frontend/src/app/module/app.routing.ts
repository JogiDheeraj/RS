import {AboutComponent} from '../components/about/about.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {IndexComponent} from '../components/index/index.component';
import {UrlPermission} from "../urlPermission/url.permission";
import {AccountComponent} from "../components/account/account.component";
import {AccountIndexComponent} from "../components/account-index/account-index.component";
import {BlogComponent} from '../components/blog/blog.component';
import {ContactComponent} from '../components/contact/contact.component';
import {SearchComponent} from "../components/search/search.component";
import {SectionComponent} from '../components/section/section.component';


const appRoutes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'section/:SeoName', component: SectionComponent},
  {path: 'account', component: AccountComponent, canActivate: [UrlPermission], 
    children: [
      {path: ':home', component: AccountIndexComponent, canActivate: [UrlPermission]},
      {path: ':profile', component: ProfileComponent, canActivate: [UrlPermission]},
    ]
  },

  // otherwise redirect to profile
  {path: '**', redirectTo: '/home'}
];

export const routing = RouterModule.forRoot(
  appRoutes,
  //{ enableTracing: true }// <-- debugging purposes only
);
