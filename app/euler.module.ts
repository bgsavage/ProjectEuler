import { NgModule } from '@angular/core';
import { Problem1 } from './problem1/problem1';
import { Problem2 } from './problem2/problem2';
import { Problem3 } from './problem3/problem3';
import { Problem4 } from './problem4/problem4';
import { Problem5 } from './problem5/problem5';
import { Problem9 } from './problem9/problem9';
import { Problem14 } from './problem14/problem14';

import { PrimeService } from './math/prime.service';

@NgModule({
  providers: [ Problem1, Problem2, Problem3, Problem4, Problem5, Problem9, Problem14, PrimeService ]
})
export class EulerModule { }
