import {Input, Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,ViewChild,ContentChild} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
   <ng-content></ng-content>
   <hr>
   <p #boundParagraph> {{bindable}}</p>
   <p> {{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements  OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  //constructor() { }

  @ViewChild('boundParagraph')  //para usar el elemeto utilizaod en template Bound Paragraph se necesita declarar  con VIewChild
    boudParagraph: HTMLElement;

  @ContentChild('boundContent')
    boundContent: HTMLElement;
  
  @Input() bindable=1000 ;


  ngOnInit() {
          this.log('ngOnInit');

  }

  ngOnChanges(){
          this.log('ngOnChanges');
  }

  ngDoCheck(){
          this.log('DoCheck');

  }

  ngAfterContentInit(){
          this.log('AfterContentInit');
          console.log(this.boundContent);

  }

  ngAfterContentChecked(){
          this.log('AfterContentChecked');

  }

  ngAfterViewInit(){
          this.log('AfterViewInit');
          console.log(this.boudParagraph);

  }

  ngAfterViewChecked(){
          this.log('AfterViewChecked');

  }

  ngOnDestroy(){
          this.log('OnDestroy');

  }

  private log(hook:string){
    console.log(hook);

  }
}
