import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoFootprintFormComponent } from './eco-footprint-form/eco-footprint-form.component';
import { EcoFootprintListComponent } from './eco-footprint-list/eco-footprint-list.component';

const routes: Routes = [
  { path: 'new', component: EcoFootprintFormComponent },
  { path: 'list', component: EcoFootprintListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
