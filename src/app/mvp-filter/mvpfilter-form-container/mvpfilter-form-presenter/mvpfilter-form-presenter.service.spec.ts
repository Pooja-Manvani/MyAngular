import { TestBed } from '@angular/core/testing';

import { MvpfilterFormPresenterService } from './mvpfilter-form-presenter.service';

describe('MvpfilterFormPresenterService', () => {
  let service: MvpfilterFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpfilterFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
