import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem2 implements EulerProblem {
  number = 2;
  description = 'The sum of even-valued fibonnacci numbers up to the given input'
  private primeService;

  getResult(input: number) {
     return this.getFibonacci(input);
  }

  getFibonacci(maxValue: number) {    
    var nPrev1 = 2;
    var nPrev2 = 1;

    var fibonacci =0;
    var evenSum = 2;

    while(fibonacci < maxValue){
        fibonacci = nPrev1 + nPrev2;

        if(fibonacci % 2==0){
            evenSum+=fibonacci;
        }

        nPrev2 = nPrev1;
        nPrev1 = fibonacci;     
    }     

    return evenSum;
  };

  constructor() {
  }
}