import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { EcoAction } from '../models/EcoAction';

@Component({
  selector: 'app-eco-action-list-information',
  templateUrl: './eco-action-list-information.component.html',
  styleUrls: ['./eco-action-list-information.component.scss']
})
export class EcoActionListInformationComponent implements OnInit {
  @Input() ecoActions: EcoAction[];
  totalCo2e: Number;
  ecoActionsLength: Number;

  constructor() { }

  ngOnInit() {
    this.totalCo2e = this.getSumCo2e(this.ecoActions);
    this.ecoActionsLength = this.getNumberOfSelectedActions(this.ecoActions);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalCo2e = this.getSumCo2e(this.ecoActions);
    this.ecoActionsLength = this.getNumberOfSelectedActions(this.ecoActions);
  }

  getSumCo2e(ecoActions): Number {
    const getSum = (total, value) => total + value;

    return ecoActions && ecoActions.length && ecoActions.map( action => action.co2e || 0 ).reduce(getSum) || 0;
  }

  getNumberOfSelectedActions(ecoActions): Number {
    return ecoActions && ecoActions.length;
  }

}
