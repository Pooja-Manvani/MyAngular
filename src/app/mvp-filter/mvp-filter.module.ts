import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpFilterRoutingModule } from './mvp-filter-routing.module';
import { MvpFilterComponent } from './mvp-filter.component';
import { MvpfilterFormContainerComponent } from './mvpfilter-form-container/mvpfilter-form-container.component';
import { MvpfilterListContainerComponent } from './mvpfilter-list-container/mvpfilter-list-container.component';
import { MvpfilterFormPresentationComponent } from './mvpfilter-form-container/mvpfilter-form-presentation/mvpfilter-form-presentation.component';
import { MvpfilterListPresentationComponent } from './mvpfilter-list-container/mvpfilter-list-presentation/mvpfilter-list-presentation.component';


@NgModule({
  declarations: [
    MvpFilterComponent,
    MvpfilterFormContainerComponent,
    MvpfilterListContainerComponent,
    MvpfilterFormPresentationComponent,
    MvpfilterListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpFilterRoutingModule,
    
  ]
})
export class MvpFilterModule { }
