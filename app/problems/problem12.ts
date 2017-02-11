import { EulerProblem } from './../eulerproblem.interface';
import { DivisorService } from './../math/divisor.service';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem12 implements EulerProblem { 
  number = 12;
  description = 'Value of the first triangle number to have over a given number of divisors';

  getResult(input: number) {
    let triangleNumber = 0;
    let counter = 1;
    let divisors = 0;

    while(divisors < input)
    {
        triangleNumber += counter++;
        divisors = this.divisorService.get(triangleNumber).length;            
    }   

    return triangleNumber;
  }

  constructor(private divisorService : DivisorService) {
  }
}