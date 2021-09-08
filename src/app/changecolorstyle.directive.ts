import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolorstyle]'
})
export class ChangecolorstyleDirective {

  constructor(private el :ElementRef) { }

}
