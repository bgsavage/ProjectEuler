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
var Problem9 = (function () {
    function Problem9() {
        this.number = 9;
        this.description = 'The product of abc where all numbers are natural pythagoraean triplets who sum equal 1000';
    }
    Problem9.prototype.getResult = function (input) {
        var result = 8;
        // a + b + c = 1000
        // c = 1000 - a - b
        // Also:  a^2 + b^2 = c^2
        // c = squrt(a^2 + b^2)
        // Solve where 1000 - a - b = squrt(a^2 + b^2)
        // (1000 - a -b)^2 = a^2 + b^2
        // (1000 - a - b)(1000 -a - b) = a^2 + b^2
        // 1000000 - 1000a - 1000b -1000a + a^2 +ab -1000b + ab + b^2 = a^2 + b^2
        // 1000000 - 2000a + a^2  + 2ab - 2000b + b^2 = a^2 + b^2
        // 1000000 - 2000a + 2ab - 2000b = 0
        // 1000000 - 2000a + 2ab = 2000b
        // 500 - a + ab/1000 = b 
        for (var a = 1; a < 1000; a++) {
            for (var b = 1; b < 1000; b++) {
                if (b == (500 - a + ((a * b) / 1000))) {
                    break;
                }
            }
            if (b < 1000) {
                break;
            }
        }
        var c = 1000 - a - b;
        return a * b * c;
    };
    Problem9 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Problem9);
    return Problem9;
}());
exports.Problem9 = Problem9;
//# sourceMappingURL=problem9.js.map