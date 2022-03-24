import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpFilterComponent } from './mvp-filter.component';

describe('MvpFilterComponent', () => {
  let component: MvpFilterComponent;
  let fixture: ComponentFixture<MvpFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
