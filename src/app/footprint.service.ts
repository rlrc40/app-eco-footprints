import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Footprint } from './footprint';
import { FOOTPRINTS } from './mock-footprints';

@Injectable({
  providedIn: 'root'
})
export class FootprintService {

  constructor(private messageService: MessageService) { }

  getFootprints(): Observable<Footprint[]> {
    this.messageService.add('FootprintService: fetched footprints');
    return of(FOOTPRINTS);
  }

}
