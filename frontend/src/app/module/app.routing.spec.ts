import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { RoutingModule } from "./app.routing";
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from "../managment/profile/profile.component";
import { AppComponent } from "../components/app.component";

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;
  let r = new RoutingModule();
  let appRoutes = r.getappRoutes();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
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
    const promise = new Promise((resolve) => {
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

