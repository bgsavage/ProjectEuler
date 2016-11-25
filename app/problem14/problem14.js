"use strict";
var collatz_service_1 = require('./collatz.service');
var core_1 = require('@angular/core');
core_1.Injectable();
var Problem14 = (function () {
    function Problem14() {
        this.number = 14;
        this.collatzService = new collatz_service_1.CollatzService();
    }
    Problem14.prototype.getResult = function (input) {
        return this.collatzService.getSequence(input);
    };
    ;
    return Problem14;
}());
exports.Problem14 = Problem14;
//# sourceMappingURL=problem14.js.map