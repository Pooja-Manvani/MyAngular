import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpfilterFormPresentationComponent } from './mvpfilter-form-presentation.component';

describe('MvpfilterFormPresentationComponent', () => {
  let component: MvpfilterFormPresentationComponent;
  let fixture: ComponentFixture<MvpfilterFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpfilterFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpfilterFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
