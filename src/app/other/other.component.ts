import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-other',//fa de firstapp
  templateUrl: './other.component.html',
  styles: [`

  	h2 {

  		color:blue;
  	}
  `]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
