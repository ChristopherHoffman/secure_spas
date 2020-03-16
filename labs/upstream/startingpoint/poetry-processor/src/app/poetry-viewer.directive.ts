import { Directive, ElementRef } from '@angular/core';
import { PoetryStateService } from './poetry-state.service';

@Directive({
  selector: '[ppPoetryViewer]'
})
export class PoetryViewerDirective {

  constructor(readonly element: ElementRef, readonly state:PoetryStateService) { 
    state.content$
         .subscribe(contents=>this.element.nativeElement.innerHTML = contents);
  }

  
}
