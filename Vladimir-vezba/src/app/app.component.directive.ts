import { Directive, ElementRef,} from '@angular/core';

@Directive({
    selector: '[appHighlight1]'
  })
  export class HighlightDirective1 {
 
    
     constructor(private el: ElementRef) { 
        this.el.nativeElement.style.color = 'green';
    }

    
  
  }