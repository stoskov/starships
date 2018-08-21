"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.text = "Settings";
        // Use the component constructor to inject providers.
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SettingsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./settings.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
