import { Injectable } from '@angular/core';
import { EulerProblem } from './eulerProblem.interface';
import { Problem3 } from './problem3/problem3';
import { Problem14 } from './problem14/problem14';

@Injectable()

export class EulerProblemFactory {
    eulerProblems: EulerProblem[];
    
    getEulerProblems() {
        return this.eulerProblems;
    }

    constructor(problem3: Problem3, problem14: Problem14) {
        this.eulerProblems = [
            problem3 as EulerProblem,
            problem14 as EulerProblem
        ]             
    }
}