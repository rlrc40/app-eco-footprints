/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EcoFootprintService } from './EcoFootprint.service';

describe('Service: EcoFootprint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcoFootprintService]
    });
  });

  it('should ...', inject([EcoFootprintService], (service: EcoFootprintService) => {
    expect(service).toBeTruthy();
  }));
});
