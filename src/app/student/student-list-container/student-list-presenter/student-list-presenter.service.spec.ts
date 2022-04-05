import { TestBed } from '@angular/core/testing';

import { StudentListPresenterService } from './student-list-presenter.service';

describe('StudentListPresenterService', () => {
  let service: StudentListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
