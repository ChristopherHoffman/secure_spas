import { Component, OnInit } from '@angular/core';
import { PoetryStateService } from '../poetry-state.service';

//<input [ngModel]="state.content$ | async" (value)='update($event)'/>

@Component({
  selector: 'pp-poetry-editor',
  template: `
  <div>
    <label>contents:
    <input [(ngModel)]="contents" />
    <button (click)='save()'>Save</button>
    </label>
  </div>
  `,
  styleUrls: ['./poetry-editor.component.scss']
})
export class PoetryEditorComponent {
  contents:string;
  
  constructor(private readonly state:PoetryStateService) { 
    state.content$.subscribe(c=>this.contents=c);
  }

  save(){
    this.state.handle({payload:this.contents});
  }

}
