import { Component, OnInit } from '@angular/core';

import { EcoFootprintService } from '../service/EcoFootprint.service';
import { ImageService } from '../service/Image.service';
import { SnackBarService } from '../service/SnackBar.service';
import { EcoFootprint } from '../models/EcoFootprint';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-eco-footprint-list',
  templateUrl: './eco-footprint-list.component.html',
  styleUrls: ['./eco-footprint-list.component.scss']
})
export class EcoFootprintListComponent implements OnInit {
  ecoFootprints: EcoFootprint[] = [];
  ecoFootprintsImages: string[] = [];
  isLoading: Boolean = true;

  constructor(
    private ecoFootprintService: EcoFootprintService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private snackBarService: SnackBarService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getEcoFootprints();
      this.isLoading = false;
    }, 1000);
  }

  getEcoFootprints(): void {
    this.ecoFootprintService.findAll()
      .subscribe(ecoFootprints => this.ecoFootprints = ecoFootprints.reverse());
  }

  deleteEcoFootprint(ecoFootprintId: string): void {
    this.isLoading = true;
    this.ecoFootprintService.delete(ecoFootprintId)
      .subscribe(() => {
        this.ecoFootprints = this.ecoFootprints.filter(footprint => footprint.id !== ecoFootprintId);
        setTimeout(() => {
          this.isLoading = false;
          this.snackBarService.openSnackBar('Eco footprint delete', 'Success');
        }, 1000);
      });

  }

}
