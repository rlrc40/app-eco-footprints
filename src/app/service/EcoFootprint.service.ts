import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { EcoFootprint } from '../models/EcoFootprint';

import { SnackBarService } from './SnackBar.service';

@Injectable({
  providedIn: 'root'
})
export class EcoFootprintService {

  private ecoFootprintsUrl = `${window.location.protocol}//${window.location.hostname}:4200/eco-footprints`;
  private _ecoFootprints = new BehaviorSubject<EcoFootprint[]>([]);
  private _ecoFootprintsFilter = new BehaviorSubject<EcoFootprint[]>([]);

  constructor(private http: HttpClient,
    private snackBarService: SnackBarService) { }

  getEcoFootprints(): Observable<any> {
    return this._ecoFootprints.asObservable();
  }

  setEcoFootprints(footprints: EcoFootprint[]) {
    this._ecoFootprints.next(footprints);
    this._ecoFootprintsFilter.next(footprints);
  }

  getEcoFootprintsFilter(): Observable<any> {
    return this._ecoFootprintsFilter.asObservable();
  }

  setEcoFootprintsFilter(footprints: EcoFootprint[]) {
    this._ecoFootprintsFilter.next(footprints);
  }

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

  public filterEcoFootprint


  public save(ecoFootprint: EcoFootprint) {
    const http$ = this.http.post<EcoFootprint>(this.ecoFootprintsUrl, ecoFootprint);
    http$.pipe(
      retry(2),
      catchError(err => of([]))
    ).subscribe(
      res => this.snackBarService.openSnackBar('Eco footprint create', 'Success'),
      err => this.snackBarService.openSnackBar('Eco footprint create', 'Error'),
      () => console.log('HTTP request Eco footprint create completed.')
    );
    return http$;
  }

  public delete(ecoFootprintId: string) {
    const http$ = this.http.delete(`${this.ecoFootprintsUrl}/${ecoFootprintId}`, {responseType: 'text'});
    http$.pipe(
      retry(2),
      catchError(err => of([]))
    ).subscribe(
      res => this.snackBarService.openSnackBar('Eco footprint delete', 'Success'),
      err => this.snackBarService.openSnackBar('Eco footprint delete', 'Error'),
      () => console.log('HTTP request Eco footprint delete completed.')
    );
    return http$;
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
