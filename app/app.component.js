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
var data_service_1 = require('./data/data.service');
var eulerProblem_factory_1 = require('./eulerProblem.factory');
var AppComponent = (function () {
    function AppComponent(problemFactory, dataService) {
        this.dataService = dataService;
        this.title = 'Project Euler';
        this.problems = problemFactory.getEulerProblems();
        this.selectedProblem = 8;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.dataService.preFetchData();
    };
    AppComponent.prototype.getResult = function (input) {
        var index = this.selectedProblem;
        this.result = undefined;
        this.result = this.problems[index].getResult(input);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [eulerProblem_factory_1.EulerProblemFactory],
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [eulerProblem_factory_1.EulerProblemFactory, data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map