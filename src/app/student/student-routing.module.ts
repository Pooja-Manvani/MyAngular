import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormContainerComponent } from './student-form-container/student-form-container.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentComponent } from './student.component';

const routes: Routes = [{ path: '', component: StudentComponent },
{path: 'list', component: StudentListContainerComponent},
{path: 'form', component: StudentFormContainerComponent},
{path: 'edit/:id', component: StudentFormContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
