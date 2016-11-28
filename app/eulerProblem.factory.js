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
var problem1_1 = require('./problem1/problem1');
var problem2_1 = require('./problem2/problem2');
var problem3_1 = require('./problem3/problem3');
var problem14_1 = require('./problem14/problem14');
var EulerProblemFactory = (function () {
    function EulerProblemFactory(problem1, problem2, problem3, problem14) {
        this.eulerProblems = [
            problem1,
            problem2,
            problem3,
            problem14
        ];
    }
    EulerProblemFactory.prototype.getEulerProblems = function () {
        return this.eulerProblems;
    };
    EulerProblemFactory = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [problem1_1.Problem1, problem2_1.Problem2, problem3_1.Problem3, problem14_1.Problem14])
    ], EulerProblemFactory);
    return EulerProblemFactory;
}());
exports.EulerProblemFactory = EulerProblemFactory;
//# sourceMappingURL=eulerProblem.factory.js.map