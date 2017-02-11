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
var problem1_1 = require('./problems/problem1');
var problem2_1 = require('./problems/problem2');
var problem3_1 = require('./problems/problem3');
var problem4_1 = require('./problems/problem4');
var problem5_1 = require('./problems/problem5');
var problem9_1 = require('./problems/problem9');
var problem10_1 = require('./problems/problem10');
var problem11_1 = require('./problems/problem11');
var problem12_1 = require('./problems/problem12');
var problem14_1 = require('./problems/problem14');
var EulerProblemFactory = (function () {
    function EulerProblemFactory(problem1, problem2, problem3, problem4, problem5, problem9, problem10, problem11, problem12, problem14) {
        this.eulerProblems = [
            problem1,
            problem2,
            problem3,
            problem4,
            problem5,
            problem9,
            problem10,
            problem11,
            problem12,
            problem14
        ];
    }
    EulerProblemFactory.prototype.getEulerProblems = function () {
        return this.eulerProblems;
    };
    EulerProblemFactory = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [problem1_1.Problem1, problem2_1.Problem2, problem3_1.Problem3, problem4_1.Problem4, problem5_1.Problem5, problem9_1.Problem9, problem10_1.Problem10, problem11_1.Problem11, problem12_1.Problem12, problem14_1.Problem14])
    ], EulerProblemFactory);
    return EulerProblemFactory;
}());
exports.EulerProblemFactory = EulerProblemFactory;
//# sourceMappingURL=eulerProblem.factory.js.map