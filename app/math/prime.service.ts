import { Injectable } from '@angular/core';

@Injectable()

export class PrimeService  {
    getLargestPrimeFactorOf(input: number){
        var highestPrime= -1;

        for(var i= 2; i<=input; i++) {
            while(input % i == 0 && input >= i) {
                highestPrime = i;
                input = input / i;
            }            
        }

        return highestPrime;
    }

    getPrimeFactors(input: number)  {
        var factors = [];
        for(var i= 2; i<=input; i++) {
            while(input % i == 0 && input >= i) {
                factors.push(i);
                input = input / i;
            }            
        }
        return factors;
    }
    
    isPrime(input: number) {
        for(var j = 2; j < input; j++) {          
            if(input % j == 0) {
                return false;
            }                
        }

        return true;
    }
}