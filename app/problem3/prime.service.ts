import { Injectable } from '@angular/core';

@Injectable()

export class PrimeService  {
    getLargestPrimeFactorOf(input: number){
        var toTest = input;
        var highestPrime= -1;

        for(var i= 2; i<=input; i++) {
            var isDivisible = false;

            var isPrime = this.isPrime(i);

            if(isPrime) {
                while(input % i == 0 && input >= i) {
                    highestPrime = i;
                    input = input / i;
                }
            }
        }

        return highestPrime;
    }
    
    isPrime(input: number) {
        for(var j = 2; j < input; j++) {          
            if(input % j == 0) {
                return false;
            }                
        }
        
        return true;
    };
}