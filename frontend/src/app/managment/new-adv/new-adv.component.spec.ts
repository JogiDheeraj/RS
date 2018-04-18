import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvComponent } from './new-adv.component';

describe('NewAdvComponent', () => {
  let component: NewAdvComponent;
  let fixture: ComponentFixture<NewAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
