import { Component, OnInit, Input } from '@angular/core';
import { EcoFootprintService } from '../service/EcoFootprint.service';
import { ActivatedRoute } from '@angular/router';
import { EcoFootprint } from '../models/EcoFootprint';
import { Location } from '@angular/common';
import { ImageService } from '../service/Image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-eco-footprint-detail',
  templateUrl: './eco-footprint-detail.component.html',
  styleUrls: ['./eco-footprint-detail.component.scss']
})
export class EcoFootprintDetailComponent implements OnInit {
  ecoFootprint: EcoFootprint;
  isLoading: Boolean = true;
  photoURL;

  constructor(
    private route: ActivatedRoute,
    private ecoFootprintService: EcoFootprintService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
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
        if (this.ecoFootprint.photo && this.ecoFootprint.photo !== '') {
          this.imageService.findById(this.ecoFootprint.photo)
            .subscribe(image => {
              let unsafeImageUrl = URL.createObjectURL(image);
              this.photoURL = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
            });
          }
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }

}
