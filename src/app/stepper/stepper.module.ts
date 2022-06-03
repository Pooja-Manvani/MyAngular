import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { StepperPresentationContainerComponent } from './stepper-presentation-container/stepper-presentation-container.component';
import { StepperPresenterContainerComponent } from './Stepper-container/stepper-presenter/stepper-presenter-container/stepper-presenter-container.component';


@NgModule({
  declarations: [
    StepperComponent,
    StepperPresentationContainerComponent,
    StepperPresenterContainerComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule
  ]
})
export class StepperModule { }
