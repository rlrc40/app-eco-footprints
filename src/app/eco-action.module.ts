import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { EcoActionListComponent } from './eco-action-list/eco-action-list.component';
import { EcoActionsBarComponent } from './eco-action-list/eco-actions-bar/eco-actions-bar.component';
import { EcoActionListInformationComponent } from './eco-action-list-information/eco-action-list-information.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
  ],
  declarations: [
    EcoActionListComponent,
    EcoActionsBarComponent,
    EcoActionListInformationComponent,
  ],
  exports: [
    EcoActionListComponent,
    EcoActionsBarComponent,
    EcoActionListInformationComponent,
  ]
})
export class EcoActionModule { }
