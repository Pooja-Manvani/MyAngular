import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentFormContainerComponent } from './student-form-container/student-form-container.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentFormPresentationComponent } from './student-form-container/student-form-presentation/student-form-presentation.component';
import { StudentListPresentationComponent } from './student-list-container/student-list-presentation/student-list-presentation.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentFormContainerComponent,
    StudentListContainerComponent,
    StudentFormPresentationComponent,
    StudentListPresentationComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
