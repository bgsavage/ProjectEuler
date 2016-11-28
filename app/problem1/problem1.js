"use strict";
var core_1 = require('@angular/core');
core_1.Injectable();
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
    return Problem1;
}());
exports.Problem1 = Problem1;
//# sourceMappingURL=problem1.js.map