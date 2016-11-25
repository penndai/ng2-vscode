import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-hellocomponent',
  templateUrl: './new-hellocomponent.component.html',
  styleUrls: ['./new-hellocomponent.component.css']
})
export class NewHellocomponentComponent implements OnInit {

  constructor() { }
  title='';
  
  ngOnInit() {
	  this.title="New Hello Component";
  }

}
