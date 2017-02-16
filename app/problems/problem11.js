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
var data_service_1 = require('../data/data.service');
var Problem11 = (function () {
    function Problem11(dataService) {
        this.dataService = dataService;
        this.number = 11;
        this.description = 'Greatest product of a given adjacent number in the 20x20 grid.';
    }
    Problem11.prototype.getResult = function (input) {
        var result = 0;
        input = +input;
        var grid = this.dataService.getNumberGrid();
        for (var y = 0; y < grid.length; y++) {
            for (var x = 0; x < grid[y].length; x++) {
                if (gridValue(x, y) != 0) {
                    var maxHoriz = getMaxHoriz(x, y);
                    var maxVert = getMaxVert(x, y);
                    var maxRightDiag = getMaxRightDiag(x, y);
                    var maxLeftDiag = getMaxLeftDiag(x, y);
                    result = Math.max(result, maxHoriz, maxVert, maxRightDiag, maxLeftDiag);
                }
            }
        }
        function getMaxLeftDiag(x, y) {
            var max = 0;
            for (var i = 0; i < input; i++) {
                var xOffset = x + i;
                var yOffset = y - i;
                if (xOffset + 1 - input >= 0 && yOffset < grid.length - input && yOffset >= 0 && xOffset < grid[y].length)
                    max = Math.max(max, getLeftdiag(xOffset, yOffset));
            }
            return max;
        }
        function getLeftdiag(x, y) {
            var product = 1;
            for (var i = 0; i < input; i++) {
                product *= gridValue(x - i, y + i);
            }
            return product;
        }
        function getMaxRightDiag(x, y) {
            var max = 0;
            for (var i = 0; i < input; i++) {
                var xOffset = x + i;
                var yOffset = y + i;
                if (xOffset + 1 - input >= 0 && yOffset + 1 - input >= 0 && xOffset < grid[y].length && yOffset < grid.length)
                    max = Math.max(max, getRightdiag(xOffset, yOffset));
            }
            return max;
        }
        function getRightdiag(x, y) {
            var product = 1;
            for (var i = 0; i < input; i++) {
                product *= gridValue(x - i, y - i);
            }
            return product;
        }
        function getMaxHoriz(x, y) {
            var max = 0;
            for (var i = Math.max(0, x - input); i <= Math.min(grid[y].length - input, x); i++) {
                max = Math.max(max, getHoriz(i, i + input, y));
            }
            return max;
        }
        function getHoriz(x1, x2, y) {
            var product = 1;
            for (var i = x1; i < x2; i++) {
                product *= gridValue(i, y);
            }
            return product;
        }
        function getMaxVert(x, y) {
            var max = 0;
            for (var i = Math.max(0, y - input); i <= Math.min(grid.length - input, y); i++) {
                max = Math.max(max, getVert(x, i, i + input));
            }
            return max;
        }
        function getVert(x, y1, y2) {
            var product = 1;
            for (var i = y1; i < y2; i++) {
                product *= gridValue(x, i);
            }
            return product;
        }
        function gridValue(x, y) {
            return +grid[y][x];
        }
        return result;
    };
    Problem11 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], Problem11);
    return Problem11;
}());
exports.Problem11 = Problem11;
//# sourceMappingURL=problem11.js.map