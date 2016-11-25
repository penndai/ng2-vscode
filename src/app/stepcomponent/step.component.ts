import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import {Step} from './step';
// import {Medication} from './medication';
// import {StepMedicationComponent} from './stepmedication.component';

@Component({
  selector: 'step-component',
  templateUrl: './step.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step.component.css']
})

export class StepComponent implements OnInit {
  _pstep:Step;  
  constructor() { 
	
  }
   
  ngOnInit() {
	
  }
  
   @Input()
  set pstep(step: Step) {
    this._pstep = (step) || new Step();		
  }
  get pstep() 
  { 
	return this._pstep; 
  }
}