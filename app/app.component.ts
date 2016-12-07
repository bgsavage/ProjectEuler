import { Component } from '@angular/core';
import { EulerProblemFactory } from './eulerProblem.factory';
import { Problem1 } from './problem1/problem1';
import { Problem2 } from './problem2/problem2';
import { Problem3 } from './problem3/problem3';
import { Problem4 } from './problem4/problem4';
import { Problem14 } from './problem14/problem14';

@Component({
  selector: 'my-app',
  providers: [EulerProblemFactory, Problem3, Problem14, Problem1, Problem2, Problem4 ],
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
      this.selectedProblem = 0;
  }
}
