import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dh-inner-html-login-info',
  template: `
    <h2>InnerHTML binding:</h2>
    <div [innerHTML]='contents'></div>
  `
})
export class InnerHtmlLoginInfoComponent  {
  @Input()
  contents='InnerHtmlLoginInfoComponent';
}
