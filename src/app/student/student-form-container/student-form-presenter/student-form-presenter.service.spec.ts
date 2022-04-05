import { TestBed } from '@angular/core/testing';

import { StudentFormPresenterService } from './student-form-presenter.service';

describe('StudentFormPresenterService', () => {
  let service: StudentFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
