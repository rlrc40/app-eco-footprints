import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EcoFootprint } from '../models/EcoFootprint';

@Injectable({
  providedIn: 'root'
})
export class EcoFootprintService {

  private ecoFootprintsUrl = `${window.location.protocol}//${window.location.hostname}:4200/eco-footprints`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<EcoFootprint[]> {
    return this.http.get<EcoFootprint[]>(`${this.ecoFootprintsUrl}/list`);
  }

  public save(ecoFootprint: EcoFootprint) {
    return this.http.post<EcoFootprint>(this.ecoFootprintsUrl, ecoFootprint);
  }

  public delete(ecoFootprintId: string) {
    return this.http.delete(`${this.ecoFootprintsUrl}/${ecoFootprintId}`, {responseType: 'text'});
  }

}
