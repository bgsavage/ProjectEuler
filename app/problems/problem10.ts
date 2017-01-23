import { EulerProblem } from './../eulerproblem.interface';
import { PrimeService } from './../math/prime.service';
import { Injectable } from '@angular/core';

Injectable()

export class Problem10 implements EulerProblem { 
  number = 10;
  description = 'Sum of all prime numbers below a given input.';
  private primeService;

  getResult(input: number) {
    let sum = 0;

    for(let i = 2; i < input; i++ ) {        
        if(this.primeService.isPrime(i)) 
            sum += i;                    
    }

    return sum;
  }

  constructor() {
      this.primeService = new PrimeService();          
  }
}