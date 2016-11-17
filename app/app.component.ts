import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}} {{hero()}}</h1>'
})
export class AppComponent { 
  title = 'Project Euler'
  hero = function(){
    return 'windstorm';
  }
}
