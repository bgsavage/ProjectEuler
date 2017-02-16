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
var collatz_service_1 = require('./../math/collatz.service');
var core_1 = require('@angular/core');
var Problem14 = (function () {
    function Problem14(collatzService) {
        this.collatzService = collatzService;
        this.number = 14;
        this.description = 'Which starting number has the longest Collatz sequence under the given input.';
    }
    Problem14.prototype.getResult = function (input) {
        return this.collatzService.getSequence(input);
    };
    ;
    Problem14 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [collatz_service_1.CollatzService])
    ], Problem14);
    return Problem14;
}());
exports.Problem14 = Problem14;
//# sourceMappingURL=problem14.js.map