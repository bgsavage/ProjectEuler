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
var core_1 = require('@angular/core');
var PrimeService = (function () {
    function PrimeService() {
    }
    PrimeService.prototype.getLargestPrimeFactorOf = function (input) {
        var highestPrime = -1;
        for (var i = 2; i <= input; i++) {
            while (input % i == 0 && input >= i) {
                highestPrime = i;
                input = input / i;
            }
        }
        return highestPrime;
    };
    PrimeService.prototype.getDivisors = function (input) {
        var divisors = [];
        var maxValueToTest = input;
        for (var i = 1; i < maxValueToTest; i++) {
            if (input % i == 0) {
                divisors.push(i);
                var divisibleBy = input / i;
                divisors.push(divisibleBy);
                maxValueToTest = divisibleBy;
            }
        }
        return divisors;
    };
    PrimeService.prototype.getPrimeFactors = function (input) {
        var factors = [];
        for (var i = 2; i <= input; i++) {
            while (input % i == 0 && input >= i) {
                factors.push(i);
                input = input / i;
            }
        }
        return factors;
    };
    PrimeService.prototype.isPrime = function (input) {
        var maxValueToTest = Math.floor(Math.sqrt(input));
        for (var j = 2; j <= maxValueToTest; j++) {
            if (input % j == 0)
                return false;
        }
        return true;
    };
    PrimeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PrimeService);
    return PrimeService;
}());
exports.PrimeService = PrimeService;
//# sourceMappingURL=prime.service.js.map