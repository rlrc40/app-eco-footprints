import { Component, OnInit, Input } from '@angular/core';

import { EcoAction } from '../../models/EcoAction';
@Component({
  selector: 'app-eco-actions-bar',
  templateUrl: './eco-actions-bar.component.html',
  styleUrls: ['./eco-actions-bar.component.scss']
})
export class EcoActionsBarComponent implements OnInit {
  @Input() ecoActions: EcoAction[];
  @Input() widthBar: string;
  @Input() totalBar: number;
  @Input() ticks: number[];
  @Input() barStyle: string;

  constructor() { }

  ngOnInit() {
  }

}
