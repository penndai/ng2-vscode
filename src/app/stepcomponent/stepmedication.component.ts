import { Component, OnInit, Input } from '@angular/core';
import {Medication} from './medication';

@Component({
  selector: 'stepcomponent-medication',
  templateUrl: './step.component.medication.html'
})

export class StepMedicationComponent implements OnInit {
  _medication:Medication;  
  
  constructor() { 
	
  }
   
  ngOnInit() {
	  
  }
  
   @Input()
  set pmedication(m: Medication) {	
    this._medication = (m) || new Medication();
  }
  get pmedication() { return this._medication; }
}