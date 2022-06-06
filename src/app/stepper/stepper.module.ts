import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { FormPageContainerComponent } from './form-page-container/form-page-container.component';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { FormsModule } from '@angular/forms';
import { StepTemplateComponent } from './step-template/step-template.component';


@NgModule({
  declarations: [
    StepperComponent,
    FormPageContainerComponent,
    CompletePageComponent,
    StepTemplateComponent,
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    FormsModule
  ]
})
export class StepperModule { }
