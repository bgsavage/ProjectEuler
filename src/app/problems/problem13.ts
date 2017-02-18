import { DataService } from '../data/data.service';
import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem13 implements EulerProblem { 
  number = 13;
  description = 'The sum of 100 50-digit numbers.  No input required.';
  result;

  constructor(private dataService: DataService) {
  }

  getResult(input: number) {
      let numbers = this.dataService.getFiftyDigitNumbers();
      let sum = 0;

      for(var i in numbers) {
          sum += numbers[i];    
      }

      return sum;
  };
}