import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  selectedHero : Hero;

  constructor(
    private heroService : HeroService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
    .then(result => this.heroes = result);
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}
