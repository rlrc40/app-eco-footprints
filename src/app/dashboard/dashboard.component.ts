import { Component, OnInit } from '@angular/core';
import { Footprint } from '../footprint';
import { FootprintService } from '../footprint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  footprints: Footprint[] = [];

  constructor(private footprintService: FootprintService) { }

  ngOnInit() {
    this.getFootprints();
  }

  getFootprints(): void {
    this.footprintService.getFootprints()
      .subscribe(footprints => this.footprints = footprints.slice(1, 5));
  }
}
