import { Component, OnInit } from '@angular/core';

import { EcoAction } from '../models/EcoAction';
import { EcoActionService } from '../service/EcoAction.service';

@Component({
  selector: 'app-eco-action-list',
  templateUrl: './eco-action-list.component.html',
  styleUrls: ['./eco-action-list.component.scss']
})
export class EcoActionListComponent implements OnInit {
  ecoActions: EcoAction[] = [];

  constructor(private ecoActionService: EcoActionService) { }

  ngOnInit() {
    this.getEcoActions();
  }

  getEcoActions(): void {
    this.ecoActionService.getEcoActions()
      .subscribe(ecoActions => this.ecoActions = ecoActions);
  }

  getSumCo2e(tabs): Number {
    const getSum = (total, value) => total + value;

    let totalCo2e = 0;
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i].selectedOptions.selected.map( action => action.value.co2e );
      totalCo2e += tab.length && tab.reduce(getSum) || 0;
    }
    return totalCo2e;
  }

  getNumberOfSelectedActions(tabs): Number {
    let length = 0;
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i].selectedOptions.selected;
      length += tab.length;
    }
    return length;
  }

}
