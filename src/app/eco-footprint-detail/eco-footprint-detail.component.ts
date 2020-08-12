import { Component, OnInit, Input } from '@angular/core';
import { EcoFootprintService } from '../service/EcoFootprint.service';
import { ActivatedRoute } from '@angular/router';
import { EcoFootprint } from '../models/EcoFootprint';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eco-footprint-detail',
  templateUrl: './eco-footprint-detail.component.html',
  styleUrls: ['./eco-footprint-detail.component.scss']
})
export class EcoFootprintDetailComponent implements OnInit {
  @Input() ecoFootprint: EcoFootprint;
  isLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private ecoFootprintService: EcoFootprintService,
    private location: Location
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getEcoFootprint();
      this.isLoading = false;
    }, 1000);
  }

  goBack(): void {
    this.location.back();
  }

  getEcoFootprint(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ecoFootprintService.getById(id)
      .subscribe(footprint => {
        this.ecoFootprint = footprint;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }

}
