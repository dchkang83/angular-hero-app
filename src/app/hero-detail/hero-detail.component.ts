import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero : Hero;
  @Input()
  test : string;

  constructor(
    private _heroService : HeroService,
    private _route : ActivatedRoute,
    private _location : Location
  ) { }

  ngOnInit() : void {

    this._route.params
    .switchMap((params: Params) =>
    this._heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

}
