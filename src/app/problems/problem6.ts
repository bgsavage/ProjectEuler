import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem6 implements EulerProblem { 
  number = 6;
  description = 'The difference between the sum of squares and square of sums of the first given natural numbers';

  getResult(input: number) {
    let sumOfSquares = 0;
    let sum = 0;

    for(let i = 0; i <= input; i ++) {
        sum += i;
        sumOfSquares += i*i;
    }

    let squareOfSums = sum * sum;
    let result = squareOfSums - sumOfSquares;

    return result;
  }
}