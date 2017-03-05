import { EulerProblem } from './../eulerproblem.interface';
import { Memoize } from 'typescript-memoize';
import { Injectable } from '@angular/core';

@Injectable()

export class Problem15 implements EulerProblem { 
  number = 15;
  description = 'The number of lattice paths in a given X by X grid only being able to move right and down, starting at the top left corner.';
  result: number;
  
  getResult(input: number) {
      return this.getLatticePathCountAt(input,input);      
  };

  @Memoize((x: number, y: number) => { return x + ';' + y; })
  getLatticePathCountAt(x: number, y: number ):number {
      if(x == 0 || y == 0)
        return 1;
            
      return this.getLatticePathCountAt(x-1, y) + this.getLatticePathCountAt(x, y-1);
  }
}