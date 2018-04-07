import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {IndexComponent} from '../components/index/index.component';
import {UrlPermission} from "../urlPermission/url.permission";


const appRoutes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [UrlPermission]},
  {path: 'home', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // otherwise redirect to profile
  {path: '**', redirectTo: '/home'}
];

export const routing = RouterModule.forRoot(appRoutes);
