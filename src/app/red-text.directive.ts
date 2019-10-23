import { Directive,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appRedText]'
})
export class RedTextDirective {

  constructor(private eleRef:ElementRef) {
    eleRef.nativeElement.style.color = 'red'
   }

}