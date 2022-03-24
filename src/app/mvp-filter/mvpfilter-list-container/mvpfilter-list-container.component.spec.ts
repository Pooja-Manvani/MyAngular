import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpfilterListContainerComponent } from './mvpfilter-list-container.component';

describe('MvpfilterListContainerComponent', () => {
  let component: MvpfilterListContainerComponent;
  let fixture: ComponentFixture<MvpfilterListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpfilterListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpfilterListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
