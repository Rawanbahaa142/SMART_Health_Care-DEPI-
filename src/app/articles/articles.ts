import { Component } from '@angular/core';
import {  Global } from '../services/global';

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
  constructor(private global: Global){
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
}
