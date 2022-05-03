import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { EmployeeFilterPresentationComponent } from '../../employee-form-container/employee-form-presentation/employee-filter-presentation/employee-filter-presentation.component';

@Injectable()
export class EmployeeListPresenterService {
  
 
  
  nodatafound: boolean;
  constructor() { 
    this.nodatafound = false;
  
  }

  ngOnInit(): void{
    // this.tableData = this.Employees
  }

 

  
}
