import { TestBed } from '@angular/core/testing';

import { FileUploadingPresenterService } from './file-uploading-presenter.service';

describe('FileUploadingPresenterService', () => {
  let service: FileUploadingPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadingPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
