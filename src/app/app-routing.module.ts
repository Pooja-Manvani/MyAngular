import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',redirectTo:'employee',pathMatch:'full'
},
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
