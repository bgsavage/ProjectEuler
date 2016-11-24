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
var collatz_service_1 = require('./collatz.service');
var Problem14Component = (function () {
    function Problem14Component(_collatzService) {
        this.problemNumber = 14;
        this.collatzService = _collatzService;
    }
    Problem14Component.prototype.getProblem14Result = function (input) {
        var _this = this;
        new Promise(function (resolve, reject) {
            var result = _this.collatzService.getSequence(input);
            resolve(result);
        })
            .then(function (x) { return (_this.result = x); });
    };
    ;
    Problem14Component = __decorate([
        core_1.Component({
            selector: 'problem-14',
            providers: [collatz_service_1.CollatzService],
            templateUrl: 'app/problem14/problem14.html'
        }), 
        __metadata('design:paramtypes', [collatz_service_1.CollatzService])
    ], Problem14Component);
    return Problem14Component;
}());
exports.Problem14Component = Problem14Component;
//# sourceMappingURL=problem14.component.js.map