import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Auth, Colors,Api} from "../providers";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorProvider} from "../services/interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true},{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Api,Auth,Colors],
  bootstrap: [AppComponent],
})
export class AppModule {}
