import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ArticlesService } from '../services/articles-service';

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
  constructor(private articleService: ArticlesService){
    this.articles=this.articleService.getArticles(this.search);
  }
  showArticles(){
    if(this.category==='All'){
     this.articles=this.articleService.getArticles(this.search);
    }else{
      this.articles=this.articleService.getArticlesbyCategory(this.category, this.search);
    }
    console.log(this.articles);
  }

  returnTostart(){
   this.search='';
   this.showArticles();
  }
}
