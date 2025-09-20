import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.html',
  styleUrl: './articles.css'
})
export class Articles {
    articles =[{
      imageUrl : 'blog1-3-800x530.jpg',
      tag: 'maternity',
      title: "How to prepare for your baby's arrival a checklist for expectant parents"
    },
  {
      imageUrl : 'blog2-3-800x530.jpg',
      tag: 'maternity',
      title: "Caring for yourself postpartum what every new mom should know"
    },
  {
      imageUrl : 'blog1-2-800x530.jpg',
      tag: 'Psychiatric',
      title: "The importance of self-care in managing stress"
    }]
}
