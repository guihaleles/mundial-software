import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import localept from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
registerLocaleData(localept, 'pt');

import { MaterialModule} from './shared/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FileComponent } from './pages/file/file.component';
import { SalesmanModule} from './pages/sales-list/salesman.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RequestInterceptor } from './error-handling/request-interceptor.interceptor';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './appComponents/navbar/navbar.component';
import { GlobalErrorHandler } from './error-handling/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SalesmanModule,
    HttpClientModule,
    SharedModule

  ],
  exports:[
  ],
  providers: [
    { 
      // processes all errors
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler,
      // multi: true 
    },
    { provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }