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
import { Services } from './services/services';
import { ReadmoreButton } from './shared/readmore-button/readmore-button';
import { FAQ } from './faq/faq';
import { Scroller } from './shared/scroller/scroller';
import { ContactPage } from './contact-page/contact-page';
import { Articles } from './articles/articles';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { Main } from './dashboard/main/main';
import { Nav } from './dashboard/nav/nav';
import { LeftNav } from './dashboard/left-nav/left-nav';
@NgModule({
  declarations: [
    App,
    Navbar,
    Interface,
    DoctorCard,
    Button,
    Footer,
    Services,
    ReadmoreButton,
    FAQ,
    Scroller,
    Articles,
    ContactPage,
    Main,
    Nav,
    LeftNav

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbNavModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
