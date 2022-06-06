import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepService } from './step.service';
import { StepModel } from './stepper.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  steps: Observable<StepModel[]>;
  currentStep: Observable<StepModel>;

  constructor(private stepsService: StepService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: StepModel) {
    this.stepsService.setCurrentStep(step);
  }
}
