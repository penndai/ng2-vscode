import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  template: `
    <h2>HEROES</h2>
     <p>
      <button [class.disabled]="!(heroList && heroList.length>0)" (click)="(heroList && heroList.length>0) && nextHero()">Next hero</button>
    </p>
    <ul class='items'>
      <li *ngFor= 'let item of heroList' [class.selected]="isSelected(item)">
        <a [routerLink]="['/hero', item.id]">
         <span class="badge">{{item.id}}</span> {{item.name}}
        </a>
      </li>
    </ul>
    `,
    styleUrls:['./herostyles.css']
})
export class HeroListComponent {
  router:Router;
  service:HeroService;
  activatedRoute:ActivatedRoute;
  heroList:Hero[];
  private selectedId: number;

  constructor(private _router:Router, private _service:HeroService, private _activatedRoute:ActivatedRoute){
    this.router=_router;
    this.service = _service;
    this.activatedRoute=_activatedRoute;
  }

  ngOnInit(){
    
    console.log('ng init for hero list page');
    this.activatedRoute.params.forEach((params: Params)=>{
        console.log('subscribe param: ' + params['id']);
        this.selectedId = +params['id'];
        this.service.getHeroes()
          .then(heroes => this.heroList = heroes);
    });    
  }

  nextHero(){
    this.activatedRoute.params.forEach((params: Params)=>{

      var maxID = Math.max.apply(Math, this.heroList.map(function(x){return x.id;}));
      if(maxID == this.selectedId)
        this.selectedId = this.heroList[0].id;
      else
      {
          if(this.selectedId)
            this.selectedId = this.selectedId+1;
          else if(params['id'])
          this.selectedId = +params['id']+1;
          else
          this.selectedId = this.heroList[0].id;
      }
    });
  }

  isSelected(hero: Hero) { 
    return hero.id === this.selectedId; 
  }

  onSelect(hero:Hero)
  {
    this.router.navigate(['/hero', hero.id]);
  }
 }
