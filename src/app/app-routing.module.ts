import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { NestedTableComponent }  from './nestedtable/nestedtable.component';
import { HeroListComponent} from './herolist/herolist.component';
import{ Material2Component} from './material2/material2.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
       {path:'',redirectTo:'todo', pathMatch:'full'},
      { path: 'nestedtable', component: NestedTableComponent },
    //   { path: 'heroes', component: HeroListComponent },
      {path:'material2', component:Material2Component},     
       { path: 'heros', component: HeroListComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
