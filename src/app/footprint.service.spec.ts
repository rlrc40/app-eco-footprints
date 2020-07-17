/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FootprintService } from './footprint.service';

describe('Service: Footprint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootprintService]
    });
  });

  it('should ...', inject([FootprintService], (service: FootprintService) => {
    expect(service).toBeTruthy();
  }));
});
