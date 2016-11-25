import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {TodoAppComponent} from './todo.component';
import {TodoRoutingModule} from './todo.routing.module';

import {TodoService} from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  // exports:[TodoAppComponent],
  declarations: [
    TodoAppComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {}
