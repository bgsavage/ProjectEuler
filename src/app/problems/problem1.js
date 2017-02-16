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
var Problem1 = (function () {
    function Problem1() {
        this.number = 1;
        this.description = 'The sum of all multiples of 3 or 5 below the given input.';
    }
    Problem1.prototype.getResult = function (input) {
        var sum = 0;
        for (var i = 1; i < input; i++) {
            if (i % 3 == 0 || i % 5 == 0)
                sum += i;
        }
        return sum;
    };
    Problem1 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Problem1);
    return Problem1;
}());
exports.Problem1 = Problem1;
//# sourceMappingURL=problem1.js.map