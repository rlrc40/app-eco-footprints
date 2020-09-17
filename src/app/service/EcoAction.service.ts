import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EcoAction } from '../models/EcoAction';

// Hacemos el servicio injectable por si le queremos inkectar algun otro servicio
@Injectable({
  providedIn: 'root'
})
export class EcoActionService {

  private ecoActionUrl = `https://eco-footprint-api.herokuapp.com//eco-action`;  // URL to web api
  private _ecoActionsField = new BehaviorSubject<EcoAction[]>([]);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getEcoActionsField(): Observable<any> {
    return this._ecoActionsField.asObservable();
  }

  setEcoActionsField(ecoActions: EcoAction[]) {
    this._ecoActionsField.next(ecoActions);
  }

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
