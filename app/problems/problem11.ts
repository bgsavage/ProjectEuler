import { EulerProblem } from './../eulerproblem.interface';
import { PrimeService } from './../math/prime.service';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
// import { Http } from '@angular/http';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';


@Injectable()

export class Problem11 implements EulerProblem { 
  number = 11;
  description = 'Greatest product of a given adjacent number in the 20x20 grid.';
  private primeService;

  constructor(private dataService: DataService) {
  }

  getResult(input: number) {
    let sum = 11;
    let grid = {};
    var error = "";

    this.dataService.fetchData()
        .subscribe(
            data => grid = data,
            error => console.log(error)
        );

    console.log(grid);    

    return sum;
  }  
}