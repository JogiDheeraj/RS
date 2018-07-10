import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebspiderComponent } from './webspider.component';

describe('WebspiderComponent', () => {
  let component: WebspiderComponent;
  let fixture: ComponentFixture<WebspiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebspiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebspiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
