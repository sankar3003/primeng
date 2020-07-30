import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url = "http://localhost:3000/numbdsers"
  constructor(
    private http: HttpClient
  ) { }

  insert(data): Observable<any> {
    return this.http.post(this._url, data)
  }
  getAlluser(): Observable<any> {
    return this.http.get(this._url)
  }

  delete(id) {
    return this.http.delete(this._url + `/${id}`)
  }

  getById(id): Observable<any> {
    return this.http.get(this._url + `/${id}`)
  }

  findNumbers(): Observable<any> {
    // Add safe, URL encoded search parameter if there is a search term

    const options =
    {
      params: new HttpParams().set('name', 'term'),

    }
    return this.http.get(this._url, options).pipe(retry(3), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
