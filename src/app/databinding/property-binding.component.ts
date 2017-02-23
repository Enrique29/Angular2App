import { Component,Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
  
  {{result}}
  `,
  styleUrls: ['./property-binding.component.css']
})/*
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
export class PropertyBindingComponent {
  
  @Input() result: number =0;
}
