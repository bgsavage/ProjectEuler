import { Component } from '@angular/core';
import { CollatzService } from './collatz.service';

@Component({
  selector: 'problem-14',
  providers: [CollatzService],
  templateUrl: 'app/problem14/problem14.html'
})
export class Problem14Component { 
  problemNumber = 14;
  collatzService;
  result;

  constructor(_collatzService : CollatzService) {
      this.collatzService = _collatzService;          
  }

  getProblem14Result(input: number) {
    new Promise((resolve, reject) => { 
      var result = this.collatzService.getSequence(input);
      resolve(result);
    })
    .then(x => (this.result = x));
  };
}
