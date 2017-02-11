import { Injectable } from '@angular/core';

@Injectable()

export class DivisorService  {

    get(input: number) {
        let divisors = [];
        let maxValueToTest = input;

        for(var i = 1; i < maxValueToTest; i++) {          
            if(input % i == 0) {
                var divisor2 = input/i;

                divisors.push(i);     
                divisors.push(divisor2);
                
                maxValueToTest = divisor2;
            }                
        }

        return divisors;
    }
}