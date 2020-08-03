/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EcoActionService } from './EcoAction.service';

describe('Service: EcoActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcoActionService]
    });
  });

  it('should ...', inject([EcoActionService], (service: EcoActionService) => {
    expect(service).toBeTruthy();
  }));
});
