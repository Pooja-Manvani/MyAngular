import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpfilterFormContainerComponent } from './mvpfilter-form-container.component';

describe('MvpfilterFormContainerComponent', () => {
  let component: MvpfilterFormContainerComponent;
  let fixture: ComponentFixture<MvpfilterFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpfilterFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpfilterFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
