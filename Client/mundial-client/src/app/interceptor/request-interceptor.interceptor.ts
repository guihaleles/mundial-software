import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private snackbar :SnackbarComponent) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
            // if(evt.body && evt.body.success){
            //     this.snackbar.openuSuccessSnackBar('Sucesso!')
            // }}
            this.snackbar.openuSuccessSnackBar('Sucesso!');
          }}
      ),

      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Erro: ${error.error.message}`;
        }
        else {
          console.log('this is server side error');
          errorMsg = `${error.message}`;
        }
        this.snackbar.openErrorSnackBar(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}
