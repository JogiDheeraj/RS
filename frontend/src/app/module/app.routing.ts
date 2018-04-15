import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from '../components/index/index.component';
import {AboutComponent} from '../components/about/about.component';
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {BlogComponent} from '../components/blog/blog.component';
import {ContactComponent} from '../components/contact/contact.component';
import {SearchComponent} from "../components/search/search.component";
import {SectionComponent} from '../components/section/section.component';
import {ProfileComponent} from "../managment/profile/profile.component";
import {AccountComponent} from "../managment/account/account.component";
import {AccountIndexComponent} from "../managment/account-index/account-index.component";
import {SectionsComponent} from '../managment/sections/sections.component';
import {SecurityComponent} from '../managment/security/security.component';
import {SettingsComponent} from '../managment/settings/settings.component';
import {UsersComponent} from '../managment/users/users.component';

import {UrlPermission} from "../urlPermission/url.permission";
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'section/:SeoName', component: SectionComponent},
  {
    path: 'account', component: AccountComponent, canActivate: [UrlPermission],
    children: [
      {path: 'home', component: AccountIndexComponent, canActivate: [UrlPermission]},
      {path: 'profile', component: ProfileComponent, canActivate: [UrlPermission]},
      {path: 'security', component: SecurityComponent, canActivate: [UrlPermission]},
    ]
  },
  {
    path: 'manage', component: AccountComponent, canActivate: [UrlPermission],
    children: [
      {path: 'sections', component: SectionsComponent, canActivate: [UrlPermission]},
      {path: 'users', component: UsersComponent, canActivate: [UrlPermission]},
      {path: 'settings', component: SettingsComponent, canActivate: [UrlPermission]}
    ]
  },
  {path: "**", redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {}

