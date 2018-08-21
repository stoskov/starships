"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
        this.text = "Work";
        // Use the component constructor to inject providers.
    }
    WorkComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    WorkComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./work.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
