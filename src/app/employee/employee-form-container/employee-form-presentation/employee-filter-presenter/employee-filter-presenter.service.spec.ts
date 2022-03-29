import { TestBed } from '@angular/core/testing';

import { EmployeeFilterPresenterService } from './employee-filter-presenter.service';

describe('EmployeeFilterPresenterService', () => {
  let service: EmployeeFilterPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFilterPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
