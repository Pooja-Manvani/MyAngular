import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListPresentationComponent } from './student-list-presentation.component';

describe('StudentListPresentationComponent', () => {
  let component: StudentListPresentationComponent;
  let fixture: ComponentFixture<StudentListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
