"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var image_1 = require("ui/image");
var camera = require("nativescript-camera");
var StartWorkComponent = /** @class */ (function () {
    function StartWorkComponent(params) {
        this.params = params;
        this.workOrder = "";
    }
    StartWorkComponent.prototype.ngOnInit = function () {
        this.workOrder = this.params.context.workOrder;
    };
    StartWorkComponent.prototype.onSave = function () {
    };
    StartWorkComponent.prototype.onTakePicture = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var imageAsset, image;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, camera.takePicture()];
                    case 1:
                        imageAsset = _a.sent();
                        image = new image_1.Image();
                        image.src = imageAsset;
                        return [2 /*return*/];
                }
            });
        });
    };
    StartWorkComponent.prototype.onSign = function () {
    };
    StartWorkComponent.prototype.onCompleteWork = function () {
        this.params.closeCallback({ done: false });
    };
    StartWorkComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./start-work.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], StartWorkComponent);
    return StartWorkComponent;
}());
exports.StartWorkComponent = StartWorkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtd29yay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC13b3JrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBQ3RFLGtDQUFpQztBQUNqQyw0Q0FBOEM7QUFNOUM7SUFHSSw0QkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFGdEMsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQUVtQixDQUFDO0lBRWxELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtJQUVBLENBQUM7SUFFSywwQ0FBYSxHQUFuQjs7Ozs7NEJBQ3FCLHFCQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXZDLFVBQVUsR0FBRyxTQUEwQjt3QkFDdkMsS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7d0JBQ3hCLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDOzs7OztLQUMxQjtJQUVELG1DQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXpCUSxrQkFBa0I7UUFKOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7aURBSThCLGdDQUFpQjtPQUhwQyxrQkFBa0IsQ0EwQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGFydC13b3JrLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJ0V29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHdvcmtPcmRlcjogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy53b3JrT3JkZXIgPSB0aGlzLnBhcmFtcy5jb250ZXh0LndvcmtPcmRlcjtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvblRha2VQaWN0dXJlKCkge1xuICAgICAgICBsZXQgaW1hZ2VBc3NldCA9IGF3YWl0IGNhbWVyYS50YWtlUGljdHVyZSgpO1xuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICB9XG5cbiAgICBvblNpZ24oKSB7XG5cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlV29yaygpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IGRvbmU6IGZhbHNlIH0pO1xuICAgIH1cbn0iXX0=