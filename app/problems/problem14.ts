import { CollatzService } from './../math/collatz.service';
import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem14 implements EulerProblem { 
  number = 14;
  description = 'Which starting number has the longest Collatz sequence under the given input.';
  result;

  constructor(private collatzService : CollatzService) {
  }

  getResult(input: number) {
      return this.collatzService.getSequence(input);
  };
}