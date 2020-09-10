import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EcoActionModule } from './eco-action.module';
import { AppRoutingModule } from './app-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EcoFootprintFormComponent } from './eco-footprint-form/eco-footprint-form.component';
import { EcoFootprintListComponent } from './eco-footprint-list/eco-footprint-list.component';
import { EcoFootprintDetailComponent } from './eco-footprint-detail/eco-footprint-detail.component';
import { EcoFootprintFilterComponent } from './eco-footprint-filter/eco-footprint-filter.component';
import { EcoFootprintInformationComponent } from './eco-footprint-information/eco-footprint-information.component';

@NgModule({
  imports: [
    CommonModule,
    EcoActionModule,
    MatListModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatChipsModule,
    MatExpansionModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    EcoFootprintFormComponent,
    EcoFootprintListComponent,
    EcoFootprintDetailComponent,
    EcoFootprintFilterComponent,
    EcoFootprintInformationComponent
  ]
})
export class EcoFootprintModule { }
