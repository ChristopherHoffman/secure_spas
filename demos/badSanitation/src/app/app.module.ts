import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateExpressionLoginInfoComponent } from './template-expression-login-info/template-expression-login-info.component';
import { ElementRefLoginInfoComponent } from './element-ref-login-info/element-ref-login-info.component';
import { InnerHtmlLoginInfoComponent } from './inner-html-login-info/inner-html-login-info.component';
import { UnsanitizedLoginInfoComponent } from './unsanitized-login-info/unsanitized-login-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateExpressionLoginInfoComponent,
    ElementRefLoginInfoComponent,
    InnerHtmlLoginInfoComponent,
    UnsanitizedLoginInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
