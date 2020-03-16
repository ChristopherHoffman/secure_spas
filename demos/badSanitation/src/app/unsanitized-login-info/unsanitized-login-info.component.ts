import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dh-unsanitized-login-info',
  template: `
    <h2>Unsanitized:</h2>
    <div [innerHTML]='unSanitizedContents'></div>
  `,
  styles: []
})
export class UnsanitizedLoginInfoComponent {
  @Input()
  contents='UnsanitizedLoginInfoComponent';

  get unSanitizedContents(){
     return this.sanitizer.bypassSecurityTrustHtml(this.contents);
  }

  constructor(readonly sanitizer: DomSanitizer) { }
}
