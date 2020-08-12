import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EcoActionListComponent } from './eco-action-list/eco-action-list.component';
import { EcoFootprintFormComponent } from './eco-footprint-form/eco-footprint-form.component';
import { EcoFootprintListComponent } from './eco-footprint-list/eco-footprint-list.component';
import { EcoActionListInformationComponent } from './eco-action-list-information/eco-action-list-information.component';
import { EcoFootprintDetailComponent } from './eco-footprint-detail/eco-footprint-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      EcoActionListComponent,
      EcoFootprintFormComponent,
      EcoFootprintListComponent,
      EcoActionListInformationComponent,
      EcoFootprintDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatListModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatStepperModule,
      MatChipsModule,
      MatCheckboxModule,
      MatIconModule,
      MatProgressSpinnerModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
