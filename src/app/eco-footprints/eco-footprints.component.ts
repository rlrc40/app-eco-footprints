import { Component, OnInit } from '@angular/core';

import { FootprintService } from '../footprint.service';
import { MessageService } from '../message.service';

import { Footprint } from '../footprint';

@Component({
  selector: 'app-eco-footprints',
  templateUrl: './eco-footprints.component.html',
  styleUrls: ['./eco-footprints.component.scss']
})
export class EcoFootprintsComponent implements OnInit {
  footprints: Footprint[];
  selectedFootprint: Footprint;

  constructor(
    private footprintService: FootprintService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getFootprints();
  }

  onSelect(footprint: Footprint): void {
    this.selectedFootprint = footprint;
    this.messageService.add(`EcoFootprintsComponent: Selected footprint id=${footprint.id}`);
  }

  getFootprints(): void {
    this.footprintService.getFootprints()
        .subscribe(footprints => this.footprints = footprints);
  }


}
