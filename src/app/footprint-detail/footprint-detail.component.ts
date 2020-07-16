import { Component, OnInit, Input } from '@angular/core';

import { Footprint } from '../footprint';

@Component({
  selector: 'app-footprint-detail',
  templateUrl: './footprint-detail.component.html',
  styleUrls: ['./footprint-detail.component.scss']
})


export class FootprintDetailComponent implements OnInit {
  @Input() footprint: Footprint;

  constructor() { }

  ngOnInit() {
  }

}
