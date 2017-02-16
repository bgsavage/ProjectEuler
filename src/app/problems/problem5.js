"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var prime_service_1 = require('./../math/prime.service');
var core_1 = require('@angular/core');
var Problem5 = (function () {
    function Problem5(primeService) {
        this.primeService = primeService;
        this.number = 5;
        this.description = 'The smallest positive number that is evenly divisible by all of the numbers from 1 through a given input';
    }
    Problem5.prototype.getResult = function (input) {
        var allFactors = [];
        for (var i = 2; i <= input; i++) {
            var factors = this.primeService.getPrimeFactors(i);
            var _loop_1 = function(j) {
                var factor = factors[j];
                var existingFactor = allFactors.find(function (f) { return f.factor == factor; });
                var numOfOccurrences = factors.filter(function (f) { return f == factor; }).length;
                if (existingFactor && numOfOccurrences > existingFactor.numOfOccurrences) {
                    existingFactor.numOfOccurrences = numOfOccurrences;
                }
                else if (!existingFactor) {
                    var primeFactor = new PrimeFactor();
                    primeFactor.factor = factor;
                    primeFactor.numOfOccurrences = numOfOccurrences;
                    allFactors.push(primeFactor);
                }
            };
            for (var j in factors) {
                _loop_1(j);
            }
        }
        var result = 1;
        for (var i in allFactors) {
            var factor = allFactors[i];
            result *= Math.pow(factor.factor, factor.numOfOccurrences);
        }
        return result;
    };
    Problem5 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [prime_service_1.PrimeService])
    ], Problem5);
    return Problem5;
}());
exports.Problem5 = Problem5;
var PrimeFactor = (function () {
    function PrimeFactor() {
    }
    return PrimeFactor;
}());
//# sourceMappingURL=problem5.js.map