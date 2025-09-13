import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { Interface } from './interface/interface';
import { Navbar } from './navbar/navbar';
import { DoctorCard } from './doctor-card/doctor-card';
import { NgbCarouselModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    App,
    Navbar,
    Interface,
    DoctorCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbNavModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
