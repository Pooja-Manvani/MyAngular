import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../stepper/stepper.model';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements OnInit {

  @Input() step: StepModel | null;

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteStep() {
    if(this.step){
      this.step.isComplete = true;
    }
  }

}
