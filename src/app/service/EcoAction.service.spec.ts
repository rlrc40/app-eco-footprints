/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EcoActionService } from './EcoAction.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: EcoActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EcoActionService]
    });
  });

  it('should ...', inject([EcoActionService], (service: EcoActionService) => {
    expect(service).toBeTruthy();
  }));
});
