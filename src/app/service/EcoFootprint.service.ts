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

  getById(id: string): Observable<EcoFootprint> {
    const url = `${this.ecoFootprintsUrl}/${id}`;
    return this.http.get<EcoFootprint>(url).pipe(
      tap(_ => console.log(`fetched footprint id=${id}`)),
      catchError(this.handleError<EcoFootprint>(`getFootprint id=${id}`))
    );
  }

  public save(ecoFootprint: EcoFootprint) {
    return this.http.post<EcoFootprint>(this.ecoFootprintsUrl, ecoFootprint);
  }

  public delete(ecoFootprintId: string) {
    return this.http.delete(`${this.ecoFootprintsUrl}/${ecoFootprintId}`, {responseType: 'text'});
  }

  /** Log a FootprintService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`FootprintService: ${message}`);
    console.log(`FootprintService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (data: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(data); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${data.body.error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
