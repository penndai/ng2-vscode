import { Component,ViewEncapsulation, ViewChild } from '@angular/core';
import {NewHellocomponentComponent} from './new-hellocomponent/new-hellocomponent.component';
// import {StepMedicationComponent} from './stepcomponent/stepmedication.component';
// import {StepComponent} from './stepcomponent/step.component';
import {Step} from './stepcomponent/step';
import {Medication} from './stepcomponent/medication';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css'],
	encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
	_steps: Step[];
   @ViewChild('mydatatable') table;

  rows = [];
  expanded = {};
  timeout: any;


	constructor(){
		if(!this._steps){
			  this._steps = new Array<Step>(10);
			  
		}
	}

	 onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
	
	ngOnInit(){	  
	//mock steps
		for(var i=0;i<50;i++)
		{
			this._steps[i] = new Step();
			this._steps[i].name="Day " + i;	

			this._steps[i]._medication = new Array<Medication>(5);
						
			for(var j=0;j<5;j++)
			{
				this._steps[i]._medication[j] = new Medication();
				this._steps[i]._medication[j]._name = "Medication " + j;
				this._steps[i]._medication[j]._dose = 1.0;
			}			
		}

		this.rows = this._steps;
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.toggleExpandRow(row);
  }

}
