import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [{ path: '', component: EmployeeComponent,
children: [{ path:'', redirectTo: 'list', pathMatch: 'full' },
{ path: 'form', component: EmployeeFormContainerComponent},
{ path: 'list', component: EmployeeListContainerComponent}] 

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
