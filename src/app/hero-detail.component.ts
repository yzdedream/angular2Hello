/**
 * Created by kelvin on 03/03/2017.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common"
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  };

  ngOnInit(): void {
    var heroId: String;
    this.route.params.subscribe(params => heroId = params['id']);
    this.heroService.getHero(+heroId).then(hero => this.hero = hero);
    var temp = this.hero;
    debugger

    /*
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      */
  }


  goBack(): void {
    this.location.back();
  }

}


