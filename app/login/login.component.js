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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFDdEUsbUVBQWlFO0FBTWpFO0lBS0ksd0JBQW9CLE1BQXlCLEVBQVUsYUFBNEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUo1RSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQzNCLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVxRCxDQUFDO0lBRXhGLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUssZ0NBQU8sR0FBYjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBNUQsU0FBNEQsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O0tBQy9CO0lBZlEsY0FBYztRQUoxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQztpREFNOEIsZ0NBQWlCLEVBQXlCLDhCQUFhO09BTDFFLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IEtpbnZleVNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmcgPSBcImFkbWluXCI7XG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgPSBcImFkbWluXCI7XG4gICAgcHVibGljIGlzTG9hZGluZzogQm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIGtpbnZleVNlcnZpY2U6IEtpbnZleVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2dpbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLmtpbnZleVNlcnZpY2UubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB9XG59Il19