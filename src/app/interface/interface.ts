import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {  Global } from '../services/global';

@Component({
  selector: 'app-interface',
  standalone: false,
  templateUrl: './interface.html',
  styleUrls: ['./interface.css'],
})
export class Interface implements OnInit, OnDestroy {
  articles: any[]=[];
  doctors:any[]=[];
  search='';
  specialities=["Cardiologist", "Orthopedist","Nutritionist","Gynocologist"];

  category="";
  sectionsTarget = 22;
  patientReviewsTarget = 5000;

  sectionsCurrent = 0;
  patientReviewsCurrent = 0;

  private rafIdSections: number | null = null;
  private rafIdReviews: number | null = null;
  private startTimeSections: number | null = null;
  private startTimeReviews: number | null = null;

  duration = 1200;

  
  constructor(private global:Global){
    this.articles=this.global.getArticlesbyCategory(this.category,this.search);
    this.doctors=this.global.doctors;
    console.log(this.doctors);

  }
  
  ngOnInit(): void {
    this.sectionsCurrent = 0;
    this.patientReviewsCurrent = 0;
    this.animateSections();
    this.animateReviews();
  }

  ngOnDestroy(): void {
    if (this.rafIdSections) cancelAnimationFrame(this.rafIdSections);
    if (this.rafIdReviews) cancelAnimationFrame(this.rafIdReviews);
  }
  private easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  private animateSections = (timestamp?: number) => {
    if (!this.startTimeSections) this.startTimeSections = timestamp ?? performance.now();
    const now = timestamp ?? performance.now();
    const elapsed = now - this.startTimeSections;
    const progress = Math.min(1, elapsed / this.duration);
    const eased = this.easeOutCubic(progress);
    this.sectionsCurrent = Math.floor(eased * this.sectionsTarget);

    if (progress < 1) {
      this.rafIdSections = requestAnimationFrame(this.animateSections);
    } else {
      this.sectionsCurrent = this.sectionsTarget;
      this.startTimeSections = null;
      this.rafIdSections = null;
    }
  };
  private animateReviews = (timestamp?: number) => {
    if (!this.startTimeReviews) this.startTimeReviews = timestamp ?? performance.now();
    const now = timestamp ?? performance.now();
    const elapsed = now - this.startTimeReviews;
    const progress = Math.min(1, elapsed / (this.duration + 200)); // a bit slower
    const eased = this.easeOutCubic(progress);
    this.patientReviewsCurrent = Math.floor(eased * this.patientReviewsTarget);

    if (progress < 1) {
      this.rafIdReviews = requestAnimationFrame(this.animateReviews);
    } else {
      this.patientReviewsCurrent = this.patientReviewsTarget;
      this.startTimeReviews = null;
      this.rafIdReviews = null;
    }
  };

  formatNumberWithSuffix(n: number): string {
    if (n >= 1000) {
      const thousands = Math.floor(n / 1000);
      return `${thousands} K`;
    }
    return String(n);
  }
  

}
