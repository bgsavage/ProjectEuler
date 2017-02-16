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
var Problem10 = (function () {
    function Problem10(primeService) {
        this.primeService = primeService;
        this.number = 10;
        this.description = 'Sum of all prime numbers below a given input.';
    }
    Problem10.prototype.getResult = function (input) {
        var sum = 0;
        for (var i = 2; i < input; i++) {
            if (this.primeService.isPrime(i))
                sum += i;
        }
        return sum;
    };
    Problem10 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [prime_service_1.PrimeService])
    ], Problem10);
    return Problem10;
}());
exports.Problem10 = Problem10;
//# sourceMappingURL=problem10.js.map