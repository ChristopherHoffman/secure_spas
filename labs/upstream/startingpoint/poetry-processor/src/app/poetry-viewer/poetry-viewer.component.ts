import { Component, OnInit } from '@angular/core';
import { PoetryStateService } from '../poetry-state.service';

@Component({
  selector: 'pp-poetry-viewer',
  template: `
    <p>
      {{state.content$ | async}}
    </p>
  `,
  styleUrls: ['./poetry-viewer.component.scss']
})
export class PoetryViewerComponent {

  constructor(public readonly state:PoetryStateService) { 

  }



}
