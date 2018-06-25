import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvComponent } from './my-adv.component';

describe('MyAdvComponent', () => {
  let component: MyAdvComponent;
  let fixture: ComponentFixture<MyAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
