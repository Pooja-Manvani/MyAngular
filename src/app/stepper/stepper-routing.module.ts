import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { FormPageContainerComponent } from './form-page-container/form-page-container.component';
import { StepperComponent } from './stepper.component';

const routes: Routes = [{ path: '', component: FormPageContainerComponent },
{
  path: 'form',
  component: FormPageContainerComponent
},
{
  path: 'complete',
  component: CompletePageComponent
},
{
  path: '',
  redirectTo: '/form',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
