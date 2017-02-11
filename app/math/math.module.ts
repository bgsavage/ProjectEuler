import { NgModule } from '@angular/core';
import { CollatzService } from './collatz.service';
import { DivisorService } from './divisor.service';
import { PrimeService } from './prime.service';

@NgModule({
  providers: [ CollatzService, DivisorService, PrimeService]
})

export class MathModule { }
