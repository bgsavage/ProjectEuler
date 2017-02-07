import { EulerProblem } from './../eulerproblem.interface';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()

export class Problem11 implements EulerProblem { 
  number = 11;
  description = 'Greatest product of a given adjacent number in the 20x20 grid.';

  constructor(private dataService: DataService) {
  }

  getResult(input: number) {
    let sum = 11;
    let grid = this.dataService.getNumberGrid();  
    console.log(grid);    

    return sum;
  }  
}