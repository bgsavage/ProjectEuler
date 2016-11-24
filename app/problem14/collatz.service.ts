import { Injectable } from '@angular/core';

@Injectable()

export class CollatzService {
    getSequence(input: number) {        
        var max =0;
        var value = -1;

        for(var i=1; i<=input; i++) {
            var current = this.getSequenceLengthAt(i);
            
            if(current > max) {
                max = current;
                value = i;
                console.log(i + ' had a length of ' + max);
            }                
        }

        return value;       
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