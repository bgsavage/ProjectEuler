import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import { EulerProblemFactory } from './eulerProblem.factory';

@Component({
  selector: 'my-app',
  providers: [EulerProblemFactory],
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit { 
  title = 'Project Euler';
  problems;
  selectedProblem;
  result;

  ngOnInit() {
     this.dataService.preFetchData();
  }

  getResult(input) {
    var index = this.selectedProblem;
    this.result = undefined;
    this.result = this.problems[index].getResult(input);
  }

  constructor(problemFactory : EulerProblemFactory, private dataService: DataService) {
      this.problems = problemFactory.getEulerProblems();
      this.selectedProblem = 9;
  }
}
