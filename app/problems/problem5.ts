import { EulerProblem } from './../eulerproblem.interface';
import { PrimeService } from './../math/prime.service';
import { Injectable } from '@angular/core';

Injectable()

export class Problem5 implements EulerProblem {
  number = 5;
  description = 'The smallest positive number that is evenly divisible by all of the numbers from 1 through a given input'
  private primeService: PrimeService;

  getResult(input: number) {
      let allFactors:PrimeFactor[] = [];    

      for(let i=2; i<= input; i++) {
         var factors = this.primeService.getPrimeFactors(i);

         for(let j in factors){             
             let factor = factors[j];

             let existingFactor = allFactors.find(f => f.factor == factor);
             let numOfOccurrences = factors.filter(f => f == factor).length;

             if(existingFactor && numOfOccurrences > existingFactor.numOfOccurrences){
                 existingFactor.numOfOccurrences = numOfOccurrences;
             }
             else if(!existingFactor){
                 let primeFactor = new PrimeFactor();
                 primeFactor.factor = factor;
                 primeFactor.numOfOccurrences = numOfOccurrences;

                 allFactors.push(primeFactor);
             }
         }
      }

      let result = 1; 
      for(let i in allFactors){
          let factor = allFactors[i];
          result *= Math.pow(factor.factor, factor.numOfOccurrences);
      }
      
      return result;
  }

  constructor() {
      this.primeService = new PrimeService();          
  }
}

class PrimeFactor {
    factor: number;
    numOfOccurrences: number;
}