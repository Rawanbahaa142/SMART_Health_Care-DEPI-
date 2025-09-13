import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Interface } from './interface/interface';
import { Navbar } from './navbar/navbar';
import { DoctorCard } from './doctor-card/doctor-card';
import { NgbCarouselModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> ec64f04612fc9ea3a3b07163368e62adb91d13e4

@NgModule({
  declarations: [
    App,
    Navbar,
    Interface,
    DoctorCard
>>>>>>> ec64f04612fc9ea3a3b07163368e62adb91d13e4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbNavModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
