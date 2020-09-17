import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { EcoFootprintModule } from './eco-footprint.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
   declarations: [
      AppComponent,
      NotFoundComponent,
   ],
   imports: [
      HttpClientModule,
      EcoFootprintModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatButtonModule,
      RouterModule.forRoot([]),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
