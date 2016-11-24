import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Problem3Component } from './problem3/problem3.component'
import { Problem14Component } from './problem14/problem14.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Problem3Component, Problem14Component ],
  bootstrap:    [ AppComponent, Problem3Component, Problem14Component ]
})
export class AppModule { }
