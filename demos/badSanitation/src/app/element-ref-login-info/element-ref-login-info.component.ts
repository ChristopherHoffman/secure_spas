import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'dh-element-ref-login-info',
  template: `<p>element-ref-login-info works!</p>`
})
export class ElementRefLoginInfoComponent implements OnInit {

  @Input()
  contents='ElementRefLoginInfoComponent';

  constructor(readonly elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.innerHTML=this.contents;
  }

}
