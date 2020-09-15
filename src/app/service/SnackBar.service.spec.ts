/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnackBarService } from './SnackBar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('Service: SnackBar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [SnackBarService]
    });
  });

  it('should ...', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
