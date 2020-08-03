import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EcoAction } from '../models/EcoAction';

@Injectable({
  providedIn: 'root'
})
export class EcoActionService {

  private ecoActionUrl = `${window.location.protocol}//${window.location.hostname}:4200/eco-action`;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  /** GET: ecoActions on the server */
  getEcoActions(): Observable<EcoAction[]> {
    return this.http.get<EcoAction[]>(`${this.ecoActionUrl}/list`).pipe(
      tap(_ => this.log(`fetched eco actions`)),
      catchError(this.handleError<EcoAction[]>(`getEcoActions`))
    );
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
