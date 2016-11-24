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
var prime_service_1 = require('./prime.service');
var Problem3Component = (function () {
    function Problem3Component(_primeService) {
        this.problemNumber = 3;
        this.primeService = _primeService;
    }
    Problem3Component.prototype.getResult = function (input) {
        var _this = this;
        this.inProgress = true;
        new Promise(function (resolve, reject) {
            var result = _this.primeService.getLargestPrimeFactorOf(input);
            resolve(result);
        })
            .then(function (x) { return (_this.result = x); });
        this.inProgress = false;
    };
    Problem3Component = __decorate([
        core_1.Component({
            selector: 'problem-3',
            providers: [prime_service_1.PrimeService],
            templateUrl: 'app/problem3/problem3.html'
        }), 
        __metadata('design:paramtypes', [prime_service_1.PrimeService])
    ], Problem3Component);
    return Problem3Component;
}());
exports.Problem3Component = Problem3Component;
//# sourceMappingURL=problem3.component.js.map