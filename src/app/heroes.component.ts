import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<h2>My Heroes</h2>\n<ul class="heroes">\n  <li *ngFor="let hero of heroes"\n      (click)="onSelect(hero)">\n    <span class="badge">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n\n<my-hero-detail [hero]=\'selectedHero\'></my-hero-detail>',
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}






