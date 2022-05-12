import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypatientComponent } from './mypatient.component';

const routes: Routes = [{ path: '', component: MypatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypatientRoutingModule { }
