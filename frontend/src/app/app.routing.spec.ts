/**
 * New typescript file


import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from from './components/login/login.component';

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routing)],
      declarations: [
        RegisterComponent,
        ProfileComponent,
        AppComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /profile', fakeAsync(() => {
    router.navigate(['/profile']);
    tick(50);
    expect(location.path()).toBe('/profile');
  }));

  it('navigate to "search" takes you to /register', fakeAsync(() => {
    router.navigate(['/register']);
    tick(50);
    expect(location.path()).toBe('/register');
  }));
});

 */