import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StepService } from '../step.service';
import { StepModel } from '../stepper.model';

@Component({
  selector: 'app-form-page-container',
  templateUrl: './form-page-container.component.html',
  styleUrls: ['./form-page-container.component.scss']
})
export class FormPageContainerComponent implements OnInit {

  currentStep: Observable<StepModel>;
  
  constructor(
    private stepsService: StepService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }

}
