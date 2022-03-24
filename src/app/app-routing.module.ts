import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',redirectTo:'mvpfilter',pathMatch:'full'
},
  { path: 'mvpfilter', loadChildren: () => import('./mvp-filter/mvp-filter.module').then(m => m.MvpFilterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
