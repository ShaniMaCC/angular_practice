import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeros',
  pure: false
})
export class FlyingHerosPipe implements PipeTransform {

  transform(allHeroes: any){
    return allHeroes.filter((hero: any) => hero.canFly);
  }

}
