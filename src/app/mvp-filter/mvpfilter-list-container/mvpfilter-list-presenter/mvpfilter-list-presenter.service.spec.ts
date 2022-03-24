import { TestBed } from '@angular/core/testing';

import { MvpfilterListPresenterService } from './mvpfilter-list-presenter.service';

describe('MvpfilterListPresenterService', () => {
  let service: MvpfilterListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpfilterListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
