import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService, AuthService } from '@app/core';
import { HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private userService: AuthService,
    private router: Router,
    private toast: ToastService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const JWT = `Bearer ${this.userService.getToken()}`;
    req = req.clone({
      setHeaders: {
        Authorization: JWT
      }
    });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event;
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 400:
              this.toast.Error({
                title: 'Error',
                msg: 'Bad Request'
              });
              break;
            case 404:
              this.toast.Error({
                title: 'Error',
                msg: 'Content Not Found'
              });
              break;
            case 500:
              this.toast.Error();
              break;
            case 401:
              this.toast.Error({
                title: 'Error',
                msg: 'Dont Access'
              });
              break;
            case 403:
              this.toast.Error({
                title: 'Error',
                msg: 'Dont Access'
              });
              break;
            default:

          }
          return Observable.throw(err);
        }
      })
    );
  }
}
