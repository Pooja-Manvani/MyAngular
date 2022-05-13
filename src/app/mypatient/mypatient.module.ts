import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypatientRoutingModule } from './mypatient-routing.module';
import { MypatientComponent } from './mypatient.component';
import { MypatientContainerComponent } from './mypatient-container/mypatient-container.component';
import { MypatientPresentationComponent } from './mypatient-container/mypatient-presentation/mypatient-presentation.component';
import { MypatientListPresentationComponent } from './mypatient-container/mypatient-presentation/mypatient-list-presentation/mypatient-list-presentation.component';
import { MypatientPrescriptionPresentationComponent } from './mypatient-container/mypatient-presentation/mypatient-prescription-presentation/mypatient-prescription-presentation.component';


@NgModule({
  declarations: [
    MypatientComponent,
    MypatientContainerComponent,
    MypatientPresentationComponent,
    MypatientListPresentationComponent,
    MypatientPrescriptionPresentationComponent
  ],
  imports: [
    CommonModule,
    MypatientRoutingModule
  ]
})
export class MypatientModule { }
