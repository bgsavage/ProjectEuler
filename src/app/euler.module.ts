import { NgModule } from '@angular/core';
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
import { Problem15 } from './problems/problem15';
import { DataService } from './data/data.service';

import { PrimeService } from './math/prime.service';
import { CollatzService } from './math/collatz.service';
import { DataModule } from './data/data.module';
import { MathModule } from './math/math.module';

@NgModule({
  imports:   [ DataModule, MathModule ],
  providers: [ Problem1, Problem2, Problem3, Problem4, Problem5, Problem6, Problem7, Problem8, Problem9, Problem10, Problem11, Problem12, Problem13, Problem14, Problem15 ]
})
export class EulerModule { }
