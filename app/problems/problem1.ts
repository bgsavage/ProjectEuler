import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

Injectable()

export class Problem1 implements EulerProblem {
  number = 1;
  description = 'The sum of all multiples of 3 or 5 below the given input.'

  getResult(input: number) {
      var sum = 0;
      for(var i = 1; i<input; i++) {
          if(i%3==0 || i%5==0)
            sum+=i;
      }
    return sum;
  }

  constructor() {
  }
}