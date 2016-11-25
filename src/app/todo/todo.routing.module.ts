import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoAppComponent }    from './todo.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'todo',  component: TodoAppComponent }     
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }