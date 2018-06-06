import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuikSearchComponent} from './quik-search.component';

describe('QuikSearchComponent', () => {
  let component: QuikSearchComponent;
  let fixture: ComponentFixture<QuikSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuikSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuikSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
