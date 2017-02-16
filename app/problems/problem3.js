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
var Problem3 = (function () {
    function Problem3(primeService) {
        this.primeService = primeService;
        this.number = 3;
        this.description = 'Largest prime factor of the given input.';
    }
    Problem3.prototype.getResult = function (input) {
        return this.primeService.getLargestPrimeFactorOf(input);
    };
    Problem3 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [prime_service_1.PrimeService])
    ], Problem3);
    return Problem3;
}());
exports.Problem3 = Problem3;
//# sourceMappingURL=problem3.js.map