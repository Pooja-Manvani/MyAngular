import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilterPresentationComponent } from './employee-filter-presentation.component';

describe('EmployeeFilterPresentationComponent', () => {
  let component: EmployeeFilterPresentationComponent;
  let fixture: ComponentFixture<EmployeeFilterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFilterPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
