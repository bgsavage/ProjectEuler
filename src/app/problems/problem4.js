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
var Problem4 = (function () {
    function Problem4() {
        this.number = 4;
        this.description = 'The largest palindrome made from the product of two numbers with a given number of digits.';
    }
    Problem4.prototype.getResult = function (input) {
        var largestDigitNumber = Math.pow(10, input) - 1;
        var smallestDigitNumber = Math.pow(10, input - 1);
        var result = -1;
        for (var i = largestDigitNumber; i >= smallestDigitNumber; i--) {
            for (var j = largestDigitNumber; j >= i; j--) {
                var product = i * j;
                if (product > result && this.isPalindrome(product.toString())) {
                    result = product;
                }
            }
        }
        return result;
    };
    Problem4.prototype.isPalindrome = function (word) {
        var length = word.length;
        var midpoint = Math.floor(length / 2);
        for (var i = 0; i <= midpoint; i++) {
            if (word[i] != word[length - i - 1])
                return false;
        }
        return true;
    };
    Problem4 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Problem4);
    return Problem4;
}());
exports.Problem4 = Problem4;
//# sourceMappingURL=problem4.js.map