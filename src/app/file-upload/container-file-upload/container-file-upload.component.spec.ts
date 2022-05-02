import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFileUploadComponent } from './container-file-upload.component';

describe('ContainerFileUploadComponent', () => {
  let component: ContainerFileUploadComponent;
  let fixture: ComponentFixture<ContainerFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
