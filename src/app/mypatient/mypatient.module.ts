import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypatientRoutingModule } from './mypatient-routing.module';
import { MypatientComponent } from './mypatient.component';
import { MypatientContainerComponent } from './mypatient-container/mypatient-container.component';
import { MypatientPresentationComponent } from './mypatient-container/mypatient-presentation/mypatient-presentation.component';


@NgModule({
  declarations: [
    MypatientComponent,
    MypatientContainerComponent,
    MypatientPresentationComponent
  ],
  imports: [
    CommonModule,
    MypatientRoutingModule
  ]
})
export class MypatientModule { }
