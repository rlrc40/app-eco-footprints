import { Component, OnInit } from '@angular/core';

import { EcoFootprintService } from '../service/EcoFootprint.service';
import { EcoFootprint } from '../models/EcoFootprint';

@Component({
  selector: 'app-eco-footprint-list',
  templateUrl: './eco-footprint-list.component.html',
  styleUrls: ['./eco-footprint-list.component.scss']
})
export class EcoFootprintListComponent implements OnInit {
  ecoFootprints: EcoFootprint[] = [];

  constructor(private ecoFootprintService: EcoFootprintService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getEcoFootprints();
    }, 1000);
  }

  getEcoFootprints(): void {
    this.ecoFootprintService.findAll()
      .subscribe(ecoFootprints => this.ecoFootprints = ecoFootprints);
  }

  deleteEcoFootprint(ecoFootprintId: string): void {
    this.ecoFootprintService.delete(ecoFootprintId)
      .subscribe(this.getEcoFootprints.bind(this));

  }

}
