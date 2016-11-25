import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Start Angular2 Hello</h1>
    <nav>
      <a routerLink="/nestedtable" routerLinkActive="active">Nested Table</a> <br/>
      <a routerLink="/heroes" routerLinkActive="active">Heroes List</a><br/>
			<a routerLink="/material2" routerLinkActive="active">Material 2</a> <br/>
      <a routerLink="/todo" routerLinkActive="active">Todo APP</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class StartComponent { }
