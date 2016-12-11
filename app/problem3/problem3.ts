import { EulerProblem } from './../eulerproblem.interface';
import { PrimeService } from './../math/prime.service';
import { Injectable } from '@angular/core';

Injectable()

export class Problem3 implements EulerProblem { 
  number = 3;
  description = 'Largest prime factor of the given input.';
  private primeService;

  getResult(input: number) {
    return this.primeService.getLargestPrimeFactorOf(input);
  }

  constructor() {
      this.primeService = new PrimeService();          
  }
}