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
    let result = 0;
    input = +input;
    let grid = this.dataService.getNumberGrid();

    for(let y = 0; y < grid.length; y++ ) {
      for(let x = 0; x < grid[y].length; x++) {
        if(gridValue(x,y) != 0) {
          let maxHoriz = getMaxHoriz(x,y);
          let maxVert = getMaxVert(x,y);
          let maxRightDiag = getMaxRightDiag(x,y);
          let maxLeftDiag = getMaxLeftDiag(x,y);
          
          result = Math.max(result, maxHoriz, maxVert, maxRightDiag, maxLeftDiag); 
        }                        
      }
    }

    function getMaxLeftDiag(x,y) {     
      let max = 0;
      for(let i = 0; i < input; i++){
        let xOffset = x + i;
        let yOffset = y - i;

        if(xOffset + 1 - input >= 0 && yOffset < grid.length - input && yOffset >=0 && xOffset < grid[y].length )
          max = Math.max(max, getLeftdiag(xOffset, yOffset));        
      }   

      return max;
    }

    function getLeftdiag(x, y) : number {
      let product = 1;
      for(let i = 0; i < input; i++) {
          product *= gridValue(x - i, y + i);
      }
      return product;
    }
    
    function getMaxRightDiag(x,y) {     
      let max = 0;
      for(let i = 0; i < input; i++){
        let xOffset = x + i;
        let yOffset = y + i;

        if(xOffset + 1 - input >= 0 && yOffset + 1 - input >= 0 && xOffset < grid[y].length && yOffset < grid.length)
          max = Math.max(max, getRightdiag(xOffset, yOffset));        
      }   

      return max;
    }

    function getRightdiag(x, y) : number {
      let product = 1;
      for(let i = 0; i < input; i++) {
          product *= gridValue(x -i, y - i);
      }
      return product;
    }

    function getMaxHoriz(x,y) {     
      let max = 0;
      for(let i =Math.max(0, x-input); i <= Math.min(grid[y].length - input, x); i++){
          max = Math.max(max, getHoriz(i, i+ input, y));        
      }   

      return max;
    }

    function getHoriz(x1, x2, y) : number {
      let product = 1;
      for(let i = x1; i < x2; i++) {
        product *= gridValue(i, y);
      }

      return product;
    }

    function getMaxVert(x, y) {
      let max = 0;
      for(let i = Math.max(0, y - input); i <= Math.min(grid.length - input, y); i++){
          max = Math.max(max, getVert(x, i, i+ input));        
      }   

      return max;
    }

    function getVert(x, y1, y2) : number {
      let product = 1;
      for(let i = y1; i < y2; i++) {
        product *= gridValue(x, i);
      }

      return product;
    }

    function gridValue(x, y) {
      return +grid[y][x];
    }

    return result;
  }  
}