import { NgModule } from '@angular/core';
import { Problem1 } from './problems/problem1';
import { Problem2 } from './problems/problem2';
import { Problem3 } from './problems/problem3';
import { Problem4 } from './problems/problem4';
import { Problem5 } from './problems/problem5';
import { Problem9 } from './problems/problem9';
import { Problem10 } from './problems/problem10';
import { Problem14 } from './problems/problem14';

import { PrimeService } from './math/prime.service';

@NgModule({
  providers: [ Problem1, Problem2, Problem3, Problem4, Problem5, Problem9, Problem10, Problem14, PrimeService ]
})
export class EulerModule { }
