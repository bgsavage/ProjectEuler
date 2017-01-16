import { Injectable } from '@angular/core';
import { EulerProblem } from './eulerProblem.interface';

import { Problem1 } from './problem1/problem1';
import { Problem2 } from './problem2/problem2';
import { Problem3 } from './problem3/problem3';
import { Problem4 } from './problem4/problem4';
import { Problem5 } from './problem5/problem5';
import { Problem9 } from './problem9/problem9';
import { Problem14 } from './problem14/problem14';

@Injectable()

export class EulerProblemFactory {
    eulerProblems: EulerProblem[];
    
    getEulerProblems() {
        return this.eulerProblems;
    }

    constructor(problem1: Problem1,
                problem2: Problem2,
                problem3: Problem3, 
                problem4: Problem4,
                problem5: Problem5,
                problem9: Problem9,
                problem14: Problem14) {
        this.eulerProblems = [
            problem1 as EulerProblem,
            problem2 as EulerProblem,
            problem3 as EulerProblem,
            problem4 as EulerProblem,
            problem5 as EulerProblem,
            problem9 as EulerProblem,
            problem14 as EulerProblem
        ]             
    }
}