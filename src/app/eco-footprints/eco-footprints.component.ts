import { Component, OnInit } from '@angular/core';

import { FootprintService } from '../footprint.service';

import { Footprint } from '../footprint';

@Component({
  selector: 'app-eco-footprints',
  templateUrl: './eco-footprints.component.html',
  styleUrls: ['./eco-footprints.component.scss']
})
export class EcoFootprintsComponent implements OnInit {
  footprints: Footprint[];

  constructor(
    private footprintService: FootprintService,
  ) {}

  ngOnInit() {
    this.getFootprints();
  }

  getFootprints(): void {
    this.footprintService.getFootprints()
        .subscribe(footprints => this.footprints = footprints);
  }


}
