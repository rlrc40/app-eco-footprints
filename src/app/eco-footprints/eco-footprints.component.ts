import { Component, OnInit } from '@angular/core';

import { FOOTPRINTS } from '../mock-footprints';

import { Footprint } from '../footprint';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-eco-footprints',
  templateUrl: './eco-footprints.component.html',
  styleUrls: ['./eco-footprints.component.scss']
})
export class EcoFootprintsComponent implements OnInit {
  footprints = FOOTPRINTS;
  selectedFootprint: Footprint;

  constructor() { }

  ngOnInit() { }

  onSelect(footprint: Footprint): void {
    this.selectedFootprint = footprint;
  }


}
