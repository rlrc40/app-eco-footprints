import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EcoFootprintsComponent } from './eco-footprints/eco-footprints.component';
import { FootprintDetailComponent } from './footprint-detail/footprint-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      EcoFootprintsComponent,
      FootprintDetailComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
