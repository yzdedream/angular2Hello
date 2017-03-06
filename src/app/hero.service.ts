/**
 * Created by kelvin on 03/03/2017.
 */

import {Injectable} from '@angular/core';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesDelayed(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    var hero = HEROES.find(target => target.id === id);
    return Promise.resolve(hero);
  }
}


const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice', weapon: 'none'},
  {id: 12, name: 'Narco', weapon: 'none'},
  {id: 13, name: 'Bombasto', weapon: 'none'},
  {id: 14, name: 'Celeritas', weapon: 'none'},
  {id: 15, name: 'Magneta', weapon: 'none'},
  {id: 16, name: 'RubberMan', weapon: 'none'},
  {id: 17, name: 'Dynama', weapon: 'none'},
  {id: 18, name: 'Dr IQ', weapon: 'none'},
  {id: 19, name: 'Magma', weapon: 'none'},
  {id: 20, name: 'Tornado', weapon: 'none'}
];
