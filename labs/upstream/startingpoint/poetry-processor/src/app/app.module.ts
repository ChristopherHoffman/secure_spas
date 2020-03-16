import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoetryViewerComponent } from './poetry-viewer/poetry-viewer.component';
import { PoetryEditorComponent } from './poetry-editor/poetry-editor.component';


import { FormsModule }    from '@angular/forms';
import { PoetryViewerDirective } from './poetry-viewer.directive';


@NgModule({
  declarations: [
    AppComponent,
    PoetryViewerComponent,
    PoetryEditorComponent,
    PoetryViewerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
