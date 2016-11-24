import { Component } from '@angular/core';
import { PrimeService } from './prime.service';

@Component({
  selector: 'problem-3',
  providers: [PrimeService],
  templateUrl: 'app/problem3/problem3.html'
})
export class Problem3Component { 
  problemNumber = 3;
  primeService;
  inProgress;
  result;
  getResult(input: number) {
    this.inProgress = true;

    new Promise((resolve, reject) => { 
      var result = this.primeService.getLargestPrimeFactorOf(input);
      resolve(result);
    })
    .then(x => (this.result = x));

    this.inProgress = false;
  }

  constructor(_primeService : PrimeService) {
      this.primeService = _primeService;          
  }
}
