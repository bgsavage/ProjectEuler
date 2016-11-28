"use strict";
var core_1 = require('@angular/core');
core_1.Injectable();
var Problem2 = (function () {
    function Problem2() {
        this.number = 2;
        this.description = 'The sum of even-valued fibonnacci numbers up to the given input';
    }
    Problem2.prototype.getResult = function (input) {
        return this.getFibonacci(input);
    };
    Problem2.prototype.getFibonacci = function (maxValue) {
        var nPrev1 = 2;
        var nPrev2 = 1;
        var fibonacci = 0;
        var evenSum = 2;
        while (fibonacci < maxValue) {
            fibonacci = nPrev1 + nPrev2;
            if (fibonacci % 2 == 0) {
                evenSum += fibonacci;
            }
            nPrev2 = nPrev1;
            nPrev1 = fibonacci;
        }
        return evenSum;
    };
    ;
    return Problem2;
}());
exports.Problem2 = Problem2;
//# sourceMappingURL=problem2.js.map