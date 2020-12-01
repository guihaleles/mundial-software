import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private snackbar :SnackbarComponent, private zone: NgZone ) {}

  handleError(error: Error) {
    //Corrigindo o problema da snack bar rodando fora da zona do angular
    //Aconteceu isso por estar no ErrorHandler
    this.zone.run(()=>{
      this.snackbar.openErrorSnackBar(`${error.message}`)
    })
    console.error( error);
  }
}