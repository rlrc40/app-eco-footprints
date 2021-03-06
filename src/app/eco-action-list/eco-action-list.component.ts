import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list'

import { EcoAction } from '../models/EcoAction';
import { EcoActionService } from '../service/EcoAction.service';

import { getBarStyle } from '../eco-action-list/eco-actions-bar/utils';

@Component({
  selector: 'app-eco-action-list',
  templateUrl: './eco-action-list.component.html',
  styleUrls: ['./eco-action-list.component.scss']
})
export class EcoActionListComponent implements OnInit {
  ecoActions: EcoAction[] = [];
  ecoActionsTypes: object[] = [{ label: 'Transporte', id: 1 }, { label: 'Alimentación', id: 2 }, { label: 'Energía', id: 3 }]
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
    return ecoActions.selectedOptions?.selected.map(action => action.value) || [];
  }

  getSumCo2e(ecoActions): Number {
    const getSum = (total, value) => total + value;

    const list = ecoActions.selectedOptions?.selected || [];
    return list.length && list.map( action => action.value.co2e ).reduce(getSum) || 0;
  }

  getWidthBar(co2e): Number {
    return (100 - (co2e * 100) / this.totalBar);
  }

  isSelected(ecoActions, ecoActionId: String): Boolean {
    const selectedIds = ecoActions?.selectedOptions?.selected?.map( action => action.value.id );
    return selectedIds?.indexOf(ecoActionId) !== -1;
  }

  getCurrentBarStyle(ecoActions: EcoAction[]): object {
    return getBarStyle(ecoActions, this.totalBar);
  }

  onChange(key: string, options: MatListOption[]): void {
    this.ecoActionService.setEcoActionsField(options.map(o => o.value))
  }

}
