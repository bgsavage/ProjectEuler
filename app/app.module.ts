import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EulerModule } from './euler.module';
import { HttpModule, Http } from '@angular/http';

@NgModule({
  declarations: [ AppComponent],
  imports:      [ BrowserModule, FormsModule, HttpModule, EulerModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
