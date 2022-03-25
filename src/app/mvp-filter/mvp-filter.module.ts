import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpFilterRoutingModule } from './mvp-filter-routing.module';
import { MvpFilterComponent } from './mvp-filter.component';
import { MvpfilterFormContainerComponent } from './mvpfilter-form-container/mvpfilter-form-container.component';
import { MvpfilterListContainerComponent } from './mvpfilter-list-container/mvpfilter-list-container.component';
import { MvpfilterFormPresentationComponent } from './mvpfilter-form-container/mvpfilter-form-presentation/mvpfilter-form-presentation.component';
import { MvpfilterListPresentationComponent } from './mvpfilter-list-container/mvpfilter-list-presentation/mvpfilter-list-presentation.component';
import { FilterContainerComponent } from './mvpfilter-list-container/filter-container/filter-container.component';
// import { FilterPresentationComponent } from './mvpfilter-list-container/Filter-container/filter-presentation/filter-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MvpFilterComponent,
    MvpfilterFormContainerComponent,
    MvpfilterFormPresentationComponent,
    MvpfilterListContainerComponent,
    MvpfilterListPresentationComponent,
    FilterContainerComponent,
    // FilterPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpFilterRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class MvpFilterModule { }
