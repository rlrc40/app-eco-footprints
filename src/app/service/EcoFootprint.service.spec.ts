/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EcoFootprintService } from './EcoFootprint.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: EcoFootprint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EcoFootprintService]
    });
  });

  it('should ...', inject([EcoFootprintService], (service: EcoFootprintService) => {
    expect(service).toBeTruthy();
  }));
});
