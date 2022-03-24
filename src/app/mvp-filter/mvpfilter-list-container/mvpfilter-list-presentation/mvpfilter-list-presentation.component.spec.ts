import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpfilterListPresentationComponent } from './mvpfilter-list-presentation.component';

describe('MvpfilterListPresentationComponent', () => {
  let component: MvpfilterListPresentationComponent;
  let fixture: ComponentFixture<MvpfilterListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpfilterListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpfilterListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
