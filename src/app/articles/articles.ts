import { Component } from '@angular/core';
import {  Global } from '../services/global';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.html',
  styleUrl: './articles.css'
})
export class Articles {
  articles: any[]=[];
   search='';
   category='All';
  constructor(private global: Global,private router :Router){
    this.articles=this.global.getArticlesbyCategory(this.category,this.search);
  }
  showArticles(){
    this.articles=this.global.getArticlesbyCategory(this.category, this.search);
    console.log(this.articles);
  }

  returnTostart(){
   this.search='';
   this.category='All';
   this.showArticles();
  }
  OneArticlePage(article:any){
    this.router.navigate(['/one-article'], {
      state: article
    });
  }
}
