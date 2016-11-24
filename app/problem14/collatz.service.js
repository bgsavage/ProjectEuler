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
var CollatzService = (function () {
    function CollatzService() {
    }
    CollatzService.prototype.getSequence = function (input) {
        var max = 0;
        var value = -1;
        for (var i = 1; i <= input; i++) {
            var current = this.getSequenceLengthAt(i);
            if (current > max) {
                max = current;
                value = i;
                console.log(i + ' had a length of ' + max);
            }
        }
        return value;
    };
    CollatzService.prototype.getSequenceLengthAt = function (n) {
        var count = 1;
        while (n > 1) {
            if (n % 2 == 0) {
                n = n / 2;
            }
            else {
                n = (3 * n) + 1;
            }
            count++;
        }
        return count;
    };
    CollatzService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CollatzService);
    return CollatzService;
}());
exports.CollatzService = CollatzService;
//# sourceMappingURL=collatz.service.js.map