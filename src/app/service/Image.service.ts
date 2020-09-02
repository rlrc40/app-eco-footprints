import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private ecoFootprintsPhotosUrl = `${window.location.protocol}//${window.location.hostname}:4200/photos`;

  constructor(private http: HttpClient) {}

  public uploadImage(image: File): Observable<string> {
    const formData = new FormData();

    formData.append('file', image);
    formData.append('title', 'image');

    return this.http.post(`${this.ecoFootprintsPhotosUrl}/add`, formData, { responseType: 'text' });
  }

  public findById(footprintId: string): Observable<Blob> {
    const url = `${this.ecoFootprintsPhotosUrl}/stream/${footprintId}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap(_ => console.log(`fetched footprint image id=${footprintId}`)),
      catchError(this.handleError<File>(`getFootprint image id=${footprintId}`))
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

