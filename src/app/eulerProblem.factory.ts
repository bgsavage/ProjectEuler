import { Injectable } from '@angular/core';
import { EulerProblem } from './eulerProblem.interface';

import { Problem1 } from './problems/problem1';
import { Problem2 } from './problems/problem2';
import { Problem3 } from './problems/problem3';
import { Problem4 } from './problems/problem4';
import { Problem5 } from './problems/problem5';
import { Problem6 } from './problems/problem6';
import { Problem7 } from './problems/problem7';
import { Problem8 } from './problems/problem8';
import { Problem9 } from './problems/problem9';
import { Problem10 } from './problems/problem10';
import { Problem11 } from './problems/problem11';
import { Problem12 } from './problems/problem12';
import { Problem13 } from './problems/problem13';
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
                problem6: Problem6,
                problem7: Problem7,     
                problem8: Problem8,           
                problem9: Problem9,
                problem10: Problem10,
                problem11: Problem11,
                problem12: Problem12,
                problem13: Problem13,
                problem14: Problem14) {
        this.eulerProblems = [
            problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10,
            problem11, problem12, problem13, problem14
        ]             
    }
}