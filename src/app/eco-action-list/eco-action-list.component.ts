import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list'

import { EcoAction } from '../models/EcoAction';
import { EcoActionService } from '../service/EcoAction.service';

@Component({
  selector: 'app-eco-action-list',
  templateUrl: './eco-action-list.component.html',
  styleUrls: ['./eco-action-list.component.scss']
})
export class EcoActionListComponent implements OnInit {
  ecoActions: EcoAction[] = [];
  totalBar: number = 7.4;
  ticks: number[] = [0, 1, 2, 3, 4, 5, 6];

  constructor(private ecoActionService: EcoActionService) { }

  ngOnInit() {
    this.getEcoActions();
  }

  getEcoActions(): void {
    this.ecoActionService.getEcoActions()
      .subscribe(ecoActions => this.ecoActions = ecoActions);
  }

  getCurrentEcoActions(ecoActions) {
    return ecoActions.selectedOptions.selected.map(action => action.value);
  }

  getSumCo2e(ecoActions): Number {
    const getSum = (total, value) => total + value;

    const list = ecoActions.selectedOptions.selected;
    return list.length && list.map( action => action.value.co2e ).reduce(getSum) || 0;
  }

  getWithBar(co2e): Number {
    return (100 - (co2e * 100) / this.totalBar);
  }

  getCo2eColor(ecoActions, ecoActionId: String): String {
    const selectedIds = ecoActions?.selectedOptions?.selected?.map( action => action.value.id );
    return selectedIds.indexOf(ecoActionId) !== -1 ? '#ff4081' : '#d9d9d9';
  }

  onChange(key: string, options: MatListOption[]): void {
    this.ecoActionService.setEcoActionsField(options.map(o => o.value))
  }

}
