import { Component } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.css']
})
export class TodoAppComponent {

   newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo:Todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  setEditting(todo:Todo)
  {   
    todo.inediting = true;
  }

  stopEditing(todo:Todo, edittitle:string)
  {  
    console.log('stop editing');
    if(todo.inediting)
    {
      todo.title = edittitle;
      todo.inediting =false;
    }
  }

  updateEditingTodo(todo:Todo,edittitle:string){
     console.log('update editing');
     todo.title = edittitle;
    todo.inediting = false;
  }

  cancelEditingTodo(todo:Todo){
    todo.inediting = false;
    console.log(todo.title);
  }
  
  removeTodo(todo:Todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}