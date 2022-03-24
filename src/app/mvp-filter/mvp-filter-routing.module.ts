import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpFilterComponent } from './mvp-filter.component';
import { MvpfilterFormContainerComponent } from './mvpfilter-form-container/mvpfilter-form-container.component';
import { MvpfilterListContainerComponent } from './mvpfilter-list-container/mvpfilter-list-container.component';

const routes: Routes = [
  { path: '', 
  component: MvpfilterListContainerComponent,
  children: [
    { 
      path: 'list', 
      component: MvpfilterListContainerComponent
    },
    { 
      path: 'add', 
      component: MvpfilterFormContainerComponent
    },
    { 
      path: 'edit/:id', 
      component: MvpfilterListContainerComponent
    },
    { 
      path: '', 
      pathMatch: 'full',
      redirectTo: 'list'
    }
  ]  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpFilterRoutingModule { }
