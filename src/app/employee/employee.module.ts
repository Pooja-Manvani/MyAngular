import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { EmployeeFilterPresentationComponent } from './employee-form-container/employee-form-presentation/employee-filter-presentation/employee-filter-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormContainerComponent,
    EmployeeListContainerComponent,
    EmployeeFormPresentationComponent,
    EmployeeListPresentationComponent,
    EmployeeFilterPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    OverlayModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
