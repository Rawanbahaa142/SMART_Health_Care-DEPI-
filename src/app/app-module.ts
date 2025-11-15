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
import { Dashboard } from './User/Pages/dashboard/dashboard';
import { Usernav } from './User/Shared/usernav/usernav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker'; // موديول الـ Datepicker
import { MatNativeDateModule } from '@angular/material/core'; // موديول لدعم التواريخ بشكل Native
import { MatFormFieldModule } from '@angular/material/form-field'; // لو حبيت تحطي Input حول الـ Datepicker
import { MatInputModule } from '@angular/material/input'; // لو حبيت تستخدم Input
import { MatCardModule } from '@angular/material/card';
import { Doctors } from './User/Pages/doctors/doctors';
import { OneArticle } from './one-article/one-article';
import { DoctorInfo } from './User/Pages/doctor-info/doctor-info'; // Card لتغليف التقويم
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
    LeftNav,
    Dashboard,
    Usernav,
    Doctors,
    OneArticle,
    DoctorInfo,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbNavModule,
    FormsModule,
    MatSlideToggleModule ,
     MatDatepickerModule, // لازم عشان الـ Datepicker يشتغل
    MatNativeDateModule, // لدعم أنواع التاريخ
    MatFormFieldModule, // لو عايزة تحطي Input مع الـ Datepicker
    MatInputModule,      // لو عايزة Input
    MatCardModule        // لو عايزة Card تحوي الـ calendar
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
