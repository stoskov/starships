"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(params, kinveyService) {
        this.params = params;
        this.kinveyService = kinveyService;
        this.username = "admin";
        this.password = "admin";
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.kinveyService.login(this.username, this.password)];
                    case 1:
                        _a.sent();
                        this.isLoading = false;
                        this.params.closeCallback();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.onLoginWitMIC = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.params.closeCallback();
                this.kinveyService.loginWithMIC();
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./login.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, kinvey_service_1.KinveyService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFDdEUsbUVBQWlFO0FBTWpFO0lBS0ksd0JBQW9CLE1BQXlCLEVBQVUsYUFBNEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUo1RSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQzNCLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVxRCxDQUFDO0lBRXhGLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUssZ0NBQU8sR0FBYjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBNUQsU0FBNEQsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O0tBQy9CO0lBRUssc0NBQWEsR0FBbkI7OztnQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDOzs7O0tBQ3JDO0lBcEJRLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7aURBTThCLGdDQUFpQixFQUF5Qiw4QkFBYTtPQUwxRSxjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBLaW52ZXlTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMva2ludmV5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nID0gXCJhZG1pblwiO1xuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nID0gXCJhZG1pblwiO1xuICAgIHB1YmxpYyBpc0xvYWRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBraW52ZXlTZXJ2aWNlOiBLaW52ZXlTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGFzeW5jIG9uTG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy5raW52ZXlTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2dpbldpdE1JQygpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLmtpbnZleVNlcnZpY2UubG9naW5XaXRoTUlDKCk7XG4gICAgfVxufSJdfQ==