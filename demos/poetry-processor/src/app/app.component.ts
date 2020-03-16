import { Component } from '@angular/core';

   // <div ppPoetryViewer></div>


@Component({
  selector: 'pp-root',
  template: `
    <h1>Poetry Processor</h1>
    <pp-poetry-viewer></pp-poetry-viewer>
    <br>
    <br>
    <br>
    <br>
    <pp-poetry-editor></pp-poetry-editor>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poetry-processor';
}
