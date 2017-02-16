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
var divisor_service_1 = require('./divisor.service');
var prime_service_1 = require('./prime.service');
var MathModule = (function () {
    function MathModule() {
    }
    MathModule = __decorate([
        core_1.NgModule({
            providers: [collatz_service_1.CollatzService, divisor_service_1.DivisorService, prime_service_1.PrimeService]
        }), 
        __metadata('design:paramtypes', [])
    ], MathModule);
    return MathModule;
}());
exports.MathModule = MathModule;
//# sourceMappingURL=math.module.js.map