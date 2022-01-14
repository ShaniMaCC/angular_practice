import { ArticleService } from './article.service';
import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  constructor(private articlesService: ArticleService) { }

  transform(value: Article[], keyword: string): Article[] {
    return this.articlesService.filterArticles(value, keyword);
  }

}
