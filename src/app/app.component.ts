import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html', // siempre debe haber UN templane
  	template:`
	<h1>Inline template </h1>
	<fa-lifecycle *ngIf="!delete"  [bindable] ="boundValue">
		<p #boundContent>{{test}}</p>
	</fa-lifecycle>
	<button (click) ="delete=true"> Click para matarme :(</button>
	<button (click) ="test = 'change value'"> Click para cambiar contenido :|</button>
	<button (click) ="boundValue=2000"> Click para cambiar binding</button>
	<fa-databinding ></fa-databinding>
	  				`,
//  styleUrls: ['./app.component.css'] //los styles son opcionales, se puedeb linkear varios archivos
styles: [`
  			h1{
  				color: red;
  			}

  `]
})
export class AppComponent {
  title = 'app works! holi caca';
  caca = 'Prueba sensual';
  delete= false;
  test='Starting value';
  boundValue=1000; 
  
}

