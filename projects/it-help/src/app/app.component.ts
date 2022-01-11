import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it-help';
  power = 2;
  factor = 1;
  onAddHero() {
    this.Heros.push({ id: 21, name: 'Fandix', canFly: true });
  }
  Heros = [
    { id: 11, name: 'Dr Nice', canFly: true },
    { id: 12, name: 'Narco', canFly: false },
    { id: 13, name: 'Bombasto',  canFly: false },
    { id: 14, name: 'Celeritas',  canFly: true },
    { id: 15, name: 'Magneta',  canFly: false },
    { id: 16, name: 'RubberMan',  canFly: true },
    { id: 17, name: 'Dynama',  canFly: true },
    { id: 18, name: 'Dr IQ',  canFly: true },
    { id: 19, name: 'Magma',  canFly: false },
    { id: 20, name: 'Tornado',  canFly: true },
  ];
}
