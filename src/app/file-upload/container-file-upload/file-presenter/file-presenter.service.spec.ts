import { TestBed } from '@angular/core/testing';

import { FilePresenterService } from './file-presenter.service';

describe('FilePresenterService', () => {
  let service: FilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
