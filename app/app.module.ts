import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Problem3Component } from './problem3/problem3.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Problem3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
