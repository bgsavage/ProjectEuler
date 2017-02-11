import { Injectable } from '@angular/core';

@Injectable()

export class CollatzService {
    getSequence(input: number) {        
        var max =0;

        for(var i=1; i<=input; i++) {
            var current = this.getSequenceLengthAt(i);
            
            if(current > max) {
                max = current;
                console.log(i + ' had a length of ' + max);
            }                
        }

        return max;       
    }

    getSequenceLengthAt(n: number) {
        var count = 1;

        while(n > 1) {            
            if(n % 2 == 0) {
                n = n / 2;
            }
            else {
                n = (3*n) + 1;
            }
            count++;
        }

        return count;
    }
    
}