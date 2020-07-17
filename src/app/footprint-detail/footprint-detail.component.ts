import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FootprintService }  from '../footprint.service';
import { Footprint } from '../footprint';

@Component({
  selector: 'app-footprint-detail',
  templateUrl: './footprint-detail.component.html',
  styleUrls: ['./footprint-detail.component.scss']
})


export class FootprintDetailComponent implements OnInit {
  @Input() footprint: Footprint;

  constructor(
    private route: ActivatedRoute,
    private footprintService: FootprintService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFootprint();
  }

  getFootprint(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.footprintService.getFootprint(id)
      .subscribe(footprint => this.footprint = footprint);
  }

  goBack(): void {
    this.location.back();
  }

}
