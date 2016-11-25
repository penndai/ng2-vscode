import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {RouterModule} from '@angular/router';

import {Angular2DataTableModule} from 'angular2-data-table/src';


// import { AppComponent } from './app.component';
import {StartComponent} from './start.component';
import {AppRoutingModule} from './app-routing.module';

import { HeroesModule }         from './herolist/heroes.module';
import {TodoModule} from './todo/todo.module';
// import {HeroListComponent} from './herolist/herolist.component';
import {NewHellocomponentComponent} from './new-hellocomponent/new-hellocomponent.component';
import {StepMedicationComponent} from './stepcomponent/stepmedication.component';
import {StepComponent} from './stepcomponent/step.component'
// import {Step} from './stepcomponent/step';
// import {Medication} from './stepcomponent/medication';

import {Material2Component} from './material2/material2.component';
import {NestedTableComponent} from './nestedtable/nestedtable.component';

@NgModule({
  declarations: [
    // AppComponent,
    StartComponent,
    // HeroListComponent,
    NewHellocomponentComponent,
	  StepComponent,
	  StepMedicationComponent,
    NestedTableComponent,
    Material2Component    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HeroesModule,
    Angular2DataTableModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
