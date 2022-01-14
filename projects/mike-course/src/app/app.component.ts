import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>'

  searchText = 'sunt'

  // get articles() {
  //   return this.articlesService.articles;
  // }
  articles : Article[] = []
  constructor(private articlesService : ArticleService){}
  ngOnInit(): void {
    this.searchArticle(this.searchText);
  }

  searchArticle(keyword: string){

    // this.articlesService.searchArticle(keyword);
    // this.articles = this.articlesService.articles
    // this.articlesService.getArticles(keyword).subscribe(data => {
    //   // console.log(data);
    //   this.articles = data.articles;
    // });
    this.articlesService
    .getArticles(keyword)
    .pipe(
      map(data => data.articles)
    )
    .subscribe(articles => {
      // console.log(data);
      this.articles = articles;
    });
  }

}
