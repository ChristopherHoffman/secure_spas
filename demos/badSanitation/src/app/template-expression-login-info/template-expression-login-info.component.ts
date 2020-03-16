import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dh-template-expression-login-info',
  template: `
    <h2>Template Expression:</h2>
    <div>{{contents}}</div>
  `,

})
export class TemplateExpressionLoginInfoComponent  {
  @Input()
  contents='TemplateExpressionLoginInfoComponent';
}
