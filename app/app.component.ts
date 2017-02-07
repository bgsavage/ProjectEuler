import { Component } from '@angular/core';
import { EulerProblemFactory } from './eulerProblem.factory';

@Component({
  selector: 'my-app',
  providers: [EulerProblemFactory],
  templateUrl: 'app/app.html'
})
export class AppComponent { 
  title = 'Project Euler';
  problems;
  selectedProblem;
  result;

  getResult(input) {
    var index = this.selectedProblem;
    this.result = undefined;
    this.result = this.problems[index].getResult(input);
  }
  
  constructor(problemFactory : EulerProblemFactory) {
      this.problems = problemFactory.getEulerProblems();
      this.selectedProblem = 7;
  }
}
