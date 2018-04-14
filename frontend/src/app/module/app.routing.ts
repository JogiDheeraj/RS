import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {IndexComponent} from '../components/index/index.component';
import {UrlPermission} from "../urlPermission/url.permission";
import {AccountComponent} from "../components/account/account.component";
import {AccountIndexComponent} from "../components/account-index/account-index.component";


const appRoutes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account', component: AccountComponent, canActivate: [UrlPermission], children:[
    {path: ':home', component: AccountIndexComponent, canActivate: [UrlPermission]},
    {path: ':profile', component: ProfileComponent, canActivate: [UrlPermission]},
  ]},
  
  // otherwise redirect to profile
  {path: '**', redirectTo: '/home'}
];

export const routing = RouterModule.forRoot(appRoutes);
