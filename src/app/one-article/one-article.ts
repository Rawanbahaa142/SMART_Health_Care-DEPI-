import { Articles } from './../articles/articles';
import { Global } from './../services/global';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-article',
  standalone: false,
  templateUrl: './one-article.html',
  styleUrl: './one-article.css'
})
export class OneArticle {
  Article: any;
  Articles: any[];
  constructor(private router: Router, private global: Global) {
    this.Article = history.state;
    this.Articles = this.global.articles;
  }

  OneArticlePage(artilce: any) {
    this.Article = this.global.OneArticlePage(artilce);
  }
}
