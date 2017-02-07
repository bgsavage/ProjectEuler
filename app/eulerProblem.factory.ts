import { Injectable } from '@angular/core';
import { EulerProblem } from './eulerProblem.interface';

import { Problem1 } from './problems/problem1';
import { Problem2 } from './problems/problem2';
import { Problem3 } from './problems/problem3';
import { Problem4 } from './problems/problem4';
import { Problem5 } from './problems/problem5';
import { Problem9 } from './problems/problem9';
import { Problem10 } from './problems/problem10';
import { Problem11 } from './problems/problem11';
import { Problem14 } from './problems/problem14';

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
                problem10: Problem10,
                problem11: Problem11,
                problem14: Problem14) {
        this.eulerProblems = [
            problem1 as EulerProblem,
            problem2 as EulerProblem,
            problem3 as EulerProblem,
            problem4 as EulerProblem,
            problem5 as EulerProblem,
            problem9 as EulerProblem,
            problem10 as EulerProblem,
            problem11 as EulerProblem,
            problem14 as EulerProblem
        ]             
    }
}