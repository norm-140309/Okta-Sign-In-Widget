import { Okta } from './shared/okta/okta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Okta],
  bootstrap: [AppComponent]
})
export class AppModule { }
