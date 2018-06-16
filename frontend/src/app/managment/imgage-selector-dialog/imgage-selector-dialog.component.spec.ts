import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgageSelectorDialogComponent } from './imgage-selector-dialog.component';

describe('ImgageSelectorDialogComponent', () => {
  let component: ImgageSelectorDialogComponent;
  let fixture: ComponentFixture<ImgageSelectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgageSelectorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgageSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
