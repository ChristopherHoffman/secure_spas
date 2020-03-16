import { Component } from '@angular/core';



type Control = 'elementRef' | 'templateExpression' | 'unsanitized' | 'innerHTML';

@Component({
  selector: 'dh-root',
  template: `
  <h1>Logged in as:</h1>

  <ng-container [ngSwitch]="showControl">
    <dh-template-expression-login-info *ngSwitchCase="'templateExpression'" [contents]='contents'></dh-template-expression-login-info>
    <dh-element-ref-login-info *ngSwitchCase="'elementRef'" [contents]='contents'></dh-element-ref-login-info>
    <dh-unsanitized-login-info *ngSwitchCase="'unsanitized'" [contents]='contents'></dh-unsanitized-login-info>
    <dh-inner-html-login-info *ngSwitchCase="'innerHTML'" [contents]='contents'></dh-inner-html-login-info>
    <div *ngSwitchDefault>Pick your poison!</div>
  </ng-container>
    
  `,
  styles: []
})
export class AppComponent {
  readonly taunt = `You all been SN8KED!`;
  readonly contents=`<img src="assets/duck.jpg" onload="alert(\'${this.taunt}\')">`
  readonly showControl:Control="templateExpression";
  
  //contents='<script>alert(\'Really SN8KED\')"</script>'

  readonly title = 'badSanitation';
}
