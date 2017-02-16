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
var divisor_service_1 = require('./../math/divisor.service');
var core_1 = require('@angular/core');
var Problem12 = (function () {
    function Problem12(divisorService) {
        this.divisorService = divisorService;
        this.number = 12;
        this.description = 'Value of the first triangle number to have over a given number of divisors';
    }
    Problem12.prototype.getResult = function (input) {
        var triangleNumber = 0;
        var counter = 1;
        var divisors = 0;
        while (divisors < input) {
            triangleNumber += counter++;
            divisors = this.divisorService.get(triangleNumber).length;
        }
        return triangleNumber;
    };
    Problem12 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [divisor_service_1.DivisorService])
    ], Problem12);
    return Problem12;
}());
exports.Problem12 = Problem12;
//# sourceMappingURL=problem12.js.map