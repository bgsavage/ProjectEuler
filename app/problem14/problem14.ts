import { CollatzService } from './collatz.service';
import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

Injectable()

export class Problem14 implements EulerProblem { 
  number = 14;
  collatzService;
  result;

  constructor() {
      this.collatzService = new CollatzService();          
  }

  getResult(input: number) {
      return this.collatzService.getSequence(input);
  };
}