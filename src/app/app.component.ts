import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html', // siempre debe haber UN templane
  	template:`
<h1>Inline template </h1>
<h2> {{title}} </h2>
<fa-other></fa-other>
<fa-another> 
	<h1>Hello</h1>
	<p> World</p>
<fa-another>
<fa-another>
	<p>Holi</p>
	{{caca}}
<fa-another>

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

  
}

