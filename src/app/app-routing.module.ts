import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcoFootprintsComponent } from './eco-footprints/eco-footprints.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FootprintDetailComponent }  from './footprint-detail/footprint-detail.component';

const routes: Routes = [
  { path: 'footprints', component: EcoFootprintsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FootprintDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
