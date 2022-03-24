import { TestBed } from '@angular/core/testing';

import { MvpfilterService } from './mvpfilter.service';

describe('MvpfilterService', () => {
  let service: MvpfilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpfilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
