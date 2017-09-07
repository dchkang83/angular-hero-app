import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroService }          from './service/hero.service';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    /*
    RouterModule.forRoot([
      {
        path : 'heroes',
        component : HeroesComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : '',
        redirectTo : '/dashboard',
        pathMatch : 'full'
      },
      {
        path : 'detail/:id',
        component : HeroDetailComponent
      }
    ])
    */
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
