import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';
import { PrimeService } from './../math/prime.service'

@Injectable()

export class Problem7 implements EulerProblem { 
    number = 7;
    description = 'The nth prime number where n is the input';
    constructor(private primeService: PrimeService ) { }

    getResult(input: number) {
        let count = 0;
        let iterator = 1;

        while(count != input){
            if(this.primeService.isPrime(++iterator))
                count++;
        }    

        return iterator;
    }
}