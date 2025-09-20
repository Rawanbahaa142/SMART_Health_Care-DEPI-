import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Interface } from './interface/interface';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';
import { DoctorCard } from './shared/doctor-card/doctor-card';
import { NgbCarouselModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Button } from './shared/button/button';
import { ReadmoreButton } from './shared/readmore-button/readmore-button';
import { FAQ } from './faq/faq';
import { Scroller } from './shared/scroller/scroller';
import { Articles } from './articles/articles';
@NgModule({
  declarations: [
    App,
    Navbar,
    Interface,
    DoctorCard,
    Button,
    Footer,
    ReadmoreButton,
    FAQ,
    Scroller,
    Articles

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
