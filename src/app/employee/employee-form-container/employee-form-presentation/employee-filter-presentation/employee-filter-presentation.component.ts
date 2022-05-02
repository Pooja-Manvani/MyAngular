
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeFilterPresenterService } from '../employee-filter-presenter/employee-filter-presenter.service';

@Component({
  selector: 'app-employee-filter-presentation',
  templateUrl: './employee-filter-presentation.component.html',
  styleUrls: ['./employee-filter-presentation.component.scss']
})
export class EmployeeFilterPresentationComponent implements OnInit {

  public emitCancel:EventEmitter<boolean>;
  public emitFilterData:EventEmitter<any>;
  Filterformgroup: FormGroup;
  constructor(private overlay: Overlay, private fb: FormBuilder, private service:EmployeeFilterPresenterService) {
    this.emitCancel = new EventEmitter();

    this.Filterformgroup = this.fb.group(
      {
        name:[''],
        age:[''],
        gender:['']
      })

    this.emitFilterData = new EventEmitter();

    }

  ngOnInit(): void {
  }

  public onCancel(){
    this.emitCancel.emit();
  }

  public onFilterData(){
    this.emitFilterData.emit(this.Filterformgroup.value)
  }
}
