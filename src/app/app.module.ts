import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EcoFootprintModule } from './eco-footprint.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcoFootprintNavbarComponent } from './eco-footprint-navbar/eco-footprint-navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EcoFootprintLoginComponent } from './eco-footprint-login/eco-footprint-login.component';


@NgModule({
   declarations: [
      AppComponent,
      EcoFootprintLoginComponent,
      EcoFootprintNavbarComponent,
      NotFoundComponent,
   ],
   imports: [
      HttpClientModule,
      EcoFootprintModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      RouterModule.forRoot([]),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
