import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoFootprintFormComponent } from './eco-footprint-form/eco-footprint-form.component';
import { EcoFootprintListComponent } from './eco-footprint-list/eco-footprint-list.component';
import { EcoFootprintDetailComponent } from './eco-footprint-detail/eco-footprint-detail.component';
import { EcoFootprintInformationComponent } from './eco-footprint-information/eco-footprint-information.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: EcoFootprintInformationComponent },
  { path: 'new', component: EcoFootprintFormComponent },
  { path: 'list', component: EcoFootprintListComponent, children: [
    { path: ':id', component: EcoFootprintDetailComponent, data: { animation: 'ecofootprint-description' } },
  ] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
