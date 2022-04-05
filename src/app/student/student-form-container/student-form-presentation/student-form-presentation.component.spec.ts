import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormPresentationComponent } from './student-form-presentation.component';

describe('StudentFormPresentationComponent', () => {
  let component: StudentFormPresentationComponent;
  let fixture: ComponentFixture<StudentFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
