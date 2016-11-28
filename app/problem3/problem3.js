"use strict";
var prime_service_1 = require('./prime.service');
var core_1 = require('@angular/core');
core_1.Injectable();
var Problem3 = (function () {
    function Problem3() {
        this.number = 3;
        this.description = 'Largest prime factor of the given input.';
        this.primeService = new prime_service_1.PrimeService();
    }
    Problem3.prototype.getResult = function (input) {
        return this.primeService.getLargestPrimeFactorOf(input);
    };
    return Problem3;
}());
exports.Problem3 = Problem3;
//# sourceMappingURL=problem3.js.map