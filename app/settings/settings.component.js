"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var login_component_1 = require("~/login/login.component");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(kinveyService, modalDialogService, viewContainerRef) {
        this.kinveyService = kinveyService;
        this.modalDialogService = modalDialogService;
        this.viewContainerRef = viewContainerRef;
        this.text = "Settings";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.user = this.kinveyService.getActiveUser();
                console.log(this.user);
                return [2 /*return*/];
            });
        });
    };
    SettingsComponent.prototype.onLogout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.kinveyService.logout()];
                    case 1:
                        _a.sent();
                        options = {
                            viewContainerRef: this.viewContainerRef,
                            context: {},
                            fullscreen: true,
                        };
                        return [4 /*yield*/, this.modalDialogService.showModal(login_component_1.LoginComponent, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./settings.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [kinvey_service_1.KinveyService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFvRTtBQUNwRSxtRUFBaUU7QUFDakUsa0VBQTJGO0FBQzNGLDJEQUF5RDtBQVF6RDtJQUlJLDJCQUNZLGFBQTRCLEVBQzVCLGtCQUFzQyxFQUN0QyxnQkFBa0M7UUFGbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTnZDLFNBQUksR0FBRyxVQUFVLENBQUM7SUFNeUIsQ0FBQztJQUU3QyxvQ0FBUSxHQUFkOzs7Z0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztLQUMxQjtJQUVLLG9DQUFRLEdBQWQ7Ozs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFDO3dCQUU1QixPQUFPLEdBQXVCOzRCQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCOzRCQUN2QyxPQUFPLEVBQUUsRUFBRTs0QkFDWCxVQUFVLEVBQUUsSUFBSTt5QkFDbkIsQ0FBQzt3QkFFVyxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGdDQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUF6RSxNQUFNLEdBQUcsU0FBZ0U7Ozs7O0tBRWhGO0lBekJRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQztpREFNNkIsOEJBQWE7WUFDUixpQ0FBa0I7WUFDcEIsdUJBQWdCO09BUHJDLGlCQUFpQixDQTBCN0I7SUFBRCx3QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtpbnZleVNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJ34vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgdGV4dCA9IFwiU2V0dGluZ3NcIjtcbiAgICB1c2VyOiBLaW52ZXkuVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGtpbnZleVNlcnZpY2U6IEtpbnZleVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxEaWFsb2dTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5raW52ZXlTZXJ2aWNlLmdldEFjdGl2ZVVzZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5raW52ZXlTZXJ2aWNlLmxvZ291dCgpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RhbERpYWxvZ1NlcnZpY2Uuc2hvd01vZGFsKExvZ2luQ29tcG9uZW50LCBvcHRpb25zKTtcblxuICAgIH1cbn1cbiJdfQ==