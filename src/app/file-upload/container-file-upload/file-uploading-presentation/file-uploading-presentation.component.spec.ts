import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadingPresentationComponent } from './file-uploading-presentation.component';

describe('FileUploadingPresentationComponent', () => {
  let component: FileUploadingPresentationComponent;
  let fixture: ComponentFixture<FileUploadingPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadingPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadingPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
