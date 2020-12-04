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
import { GlobalService } from '../services/global.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private snackbar :SnackbarComponent, private global: GlobalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.global.setIsLoading(true);
    console.log(true);

    return next.handle(request).pipe(
      tap(evt => {     
        console.log(evt); 
        if (evt instanceof HttpResponse) {
            if(evt.body){
              if(request.method != "GET")
                this.snackbar.openuSuccessSnackBar('Sucesso!')
              
              this.global.setIsLoading(false);
            }
            // this.snackbar.openuSuccessSnackBar(`Sucesso! ${evt.statusText}`);
            // this.global.setIsLoading(false);
          }}
      ),

      catchError((error: HttpErrorResponse) => {
        this.global.setIsLoading(false);
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Erro: ${error.error.message}`;
        }
        else {
          console.log('this is server side error');
          console.log(error);
          errorMsg = `Erro: ${error.error}`;
        }
        // this.snackbar.openErrorSnackBar(errorMsg);
        return throwError(new Error(errorMsg));
      })
    );
  }

}
