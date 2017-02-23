import { Component,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
   <button (click) = "onClicked()">Hazme Click nena! </button>
   <p>holiboli</p>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {

  @Output('clickable') clicked = new EventEmitter<string>();
// no usar otro nombre en output si es que no lo necesitas verdaderamente por buenas practicas
  onClicked(){
    //alert('Funciona :d');
    this.clicked.emit('Funciona wey!')
  }

}
