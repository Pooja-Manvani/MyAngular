import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePresentationComponent } from './file-presentation.component';

describe('FilePresentationComponent', () => {
  let component: FilePresentationComponent;
  let fixture: ComponentFixture<FilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
