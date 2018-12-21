import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AppConfigBootstrapService } from '@app/core';
import { Icredentials } from '@app/pages/login/icredentials';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private baseUrl: AppConfigBootstrapService) { }

  public get<T>(url: string, version: any = '1.0'): Observable<any> {
    return this.http.get<T>(url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public post(url: string, body: any, version: any = '1.0'): Observable<any> {
    let fullUrl: string = this.baseUrl.configuration.host + url;
    let header: HttpHeaders = new HttpHeaders({
      'api-version': version,
      'Content-Type': 'application/json'
    });

    return this.http.post(fullUrl, body, { headers: header, })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public put(body: Icredentials): Observable<any> {
    let fullUrl: string = this.baseUrl.configuration.authUrl;

    let frmdata = new URLSearchParams();
    frmdata.append('username', body.username);
    frmdata.append('client_id', this.baseUrl.configuration.clientid);
    frmdata.append('grant_type', 'password');
    frmdata.append('password', body.password);

    let header: HttpHeaders = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    });
    return this.http.post(fullUrl, frmdata.toString(), { headers: header })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public delete(body: Icredentials): Observable<any> {
    let fullUrl: string = this.baseUrl.configuration.authUrl;

    let frmdata = new URLSearchParams();
    frmdata.append('username', body.username);
    frmdata.append('client_id', this.baseUrl.configuration.clientid);
    frmdata.append('grant_type', 'password');
    frmdata.append('password', body.password);

    let header: HttpHeaders = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    });
    return this.http.post(fullUrl, frmdata.toString(), { headers: header })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${JSON.stringify(error.status)}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
