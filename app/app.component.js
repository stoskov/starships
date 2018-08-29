"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var login_component_1 = require("~/login/login.component");
var AppComponent = /** @class */ (function () {
    function AppComponent(kinveyService, viewContainerRef, modalDialogService) {
        this.kinveyService = kinveyService;
        this.viewContainerRef = viewContainerRef;
        this.modalDialogService = modalDialogService;
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.kinveyService.isAuthenticated()) {
                            return [2 /*return*/];
                        }
                        options = {
                            viewContainerRef: this.viewContainerRef,
                            context: {},
                            fullscreen: true,
                        };
                        return [4 /*yield*/, this.modalDialogService.showModal(login_component_1.LoginComponent, options)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [kinvey_service_1.KinveyService,
            core_1.ViewContainerRef,
            modal_dialog_1.ModalDialogService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9FO0FBQ3BFLG1FQUFpRTtBQUNqRSxrRUFBMkY7QUFDM0YsMkRBQXlEO0FBTXpEO0lBQ0ksc0JBQ1ksYUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ2xDLGtCQUFzQztRQUZ0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBSSxDQUFDO0lBRWpELCtCQUFRLEdBQWQ7Ozs7Ozt3QkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsTUFBTSxnQkFBQzt3QkFDWCxDQUFDO3dCQUVLLE9BQU8sR0FBdUI7NEJBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7NEJBQ3ZDLE9BQU8sRUFBRSxFQUFFOzRCQUNYLFVBQVUsRUFBRSxJQUFJO3lCQUNuQixDQUFDO3dCQUVXLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsZ0NBQWMsRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQXpFLE1BQU0sR0FBRyxTQUFnRTs7Ozs7S0FDaEY7SUFsQlEsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO2lEQUc2Qiw4QkFBYTtZQUNWLHVCQUFnQjtZQUNkLGlDQUFrQjtPQUp6QyxZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXlTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMva2ludmV5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJ34vbG9naW4vbG9naW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBraW52ZXlTZXJ2aWNlOiBLaW52ZXlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgbW9kYWxEaWFsb2dTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxuXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmtpbnZleVNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RhbERpYWxvZ1NlcnZpY2Uuc2hvd01vZGFsKExvZ2luQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=