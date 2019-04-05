import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HenriqueComponent } from './henrique/henrique.component'
import { SobreComponent } from './sobre/sobre.component'

@NgModule({
  declarations: [
    AppComponent, HenriqueComponent, SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: './'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
