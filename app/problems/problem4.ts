import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem4 implements EulerProblem {
  number = 4;
  description = 'The largest palindrome made from the product of two numbers with a given number of digits.'

  getResult(input: number) {
      var largestDigitNumber = Math.pow(10, input) - 1;
      var smallestDigitNumber = Math.pow(10, input-1);
      var result = -1;
      
      for(var i=largestDigitNumber; i>= smallestDigitNumber; i--){
          for(var j=largestDigitNumber; j>=i; j-- ) {
              var product = i*j;
              if(product > result && this.isPalindrome(product.toString())) {
                  result = product;
              }                
          }
      }
      return result;
  }

  isPalindrome(word){
      var length = word.length;
      var midpoint = Math.floor(length/2);
      for(var i=0; i<=midpoint; i++){
          if(word[i] != word[length-i-1])
            return false;
      }

      return true;
  }
}