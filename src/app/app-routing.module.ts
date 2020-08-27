import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoFootprintFormComponent } from './eco-footprint-form/eco-footprint-form.component';
import { EcoFootprintListComponent } from './eco-footprint-list/eco-footprint-list.component';
import { EcoFootprintDetailComponent } from './eco-footprint-detail/eco-footprint-detail.component';

const routes: Routes = [
  { path: 'new', component: EcoFootprintFormComponent },
  { path: 'list', component: EcoFootprintListComponent },
  { path: 'list', component: EcoFootprintListComponent },
  { path: ':id', component: EcoFootprintDetailComponent, data: { animation: 'ecofootprint-description' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
