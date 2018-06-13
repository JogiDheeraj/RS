import {NgModule} from '@angular/core';
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
import {AclResolve} from '../permission/acl.resolve';

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
    path: 'account', component: AccountComponent, canActivate: [AclResolve],
    children: [
      {path: 'home', component: AccountIndexComponent, canActivate: [AclResolve]},
      {path: 'profile', component: ProfileComponent, canActivate: [AclResolve]},
      {path: 'security', component: SecurityComponent, canActivate: [AclResolve]},
    ]
  },
  {
    path: 'manage', component: AccountComponent, canActivate: [AclResolve],
    children: [
      {path: 'sections', component: SectionsComponent, canActivate: [AclResolve]},
      {path: 'users', component: UsersComponent, canActivate: [AclResolve]},
      {path: 'settings', component: SettingsComponent, canActivate: [AclResolve]}
    ]
  },
  //@todo change it with pageNotFound
  //{path: "**", redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {}

