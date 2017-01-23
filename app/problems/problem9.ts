import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

Injectable()

export class Problem9 implements EulerProblem {
  number = 9;
  description = 'The product of abc where all numbers are natural pythagoraean triplets who sum equal 1000'

  getResult(input: number) {
      var result = 8;
      // a + b + c = 1000
      // c = 1000 - a - b
      // Also:  a^2 + b^2 = c^2
      // c = squrt(a^2 + b^2)
      // Solve where 1000 - a - b = squrt(a^2 + b^2)
      // (1000 - a -b)^2 = a^2 + b^2
      // (1000 - a - b)(1000 -a - b) = a^2 + b^2
      // 1000000 - 1000a - 1000b -1000a + a^2 +ab -1000b + ab + b^2 = a^2 + b^2
      // 1000000 - 2000a + a^2  + 2ab - 2000b + b^2 = a^2 + b^2
      // 1000000 - 2000a + 2ab - 2000b = 0
      // 1000000 - 2000a + 2ab = 2000b
      // 500 - a + ab/1000 = b 

      for(var a=1; a<1000; a++){
        for(var b=1; b<1000; b++ ) {
          if(b == (500 - a + ((a*b)/1000))){
            break;
          }
        }
        if(b<1000){
            break;
        }          
      }

      var c = 1000 - a - b;
      return a * b * c;
  }

  constructor() {
  }
}