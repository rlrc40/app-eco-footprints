import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoFootprintFormComponent } from './eco-footprint-form/eco-footprint-form.component';

const routes: Routes = [
  { path: 'new', component: EcoFootprintFormComponent },
  { path: '', redirectTo: '/new', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
