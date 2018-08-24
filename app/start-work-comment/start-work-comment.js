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
        this.commentText = "";
    }
    StartWorkComponent.prototype.ngOnInit = function () {
    };
    StartWorkComponent.prototype.onSave = function () {
        this.params.closeCallback({ save: true, comment: this.commentText });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtd29yay1jb21tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQtd29yay1jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFDdEUsa0NBQWlDO0FBQ2pDLDRDQUE4QztBQVE5QztJQUdJLDRCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUZ0QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVpQixDQUFDO0lBRWxELHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVLLDBDQUFhLEdBQW5COzs7Ozs0QkFDcUIscUJBQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBdkMsVUFBVSxHQUFHLFNBQTBCO3dCQUN2QyxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQzt3QkFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7Ozs7O0tBQzFCO0lBaEJRLGtCQUFrQjtRQUo5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQztpREFJOEIsZ0NBQWlCO09BSHBDLGtCQUFrQixDQWlCOUI7SUFBRCx5QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGFydC13b3JrLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJ0V29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGNvbW1lbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IHNhdmU6IHRydWUsIGNvbW1lbnQ6IHRoaXMuY29tbWVudFRleHQgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25UYWtlUGljdHVyZSgpIHtcbiAgICAgICAgbGV0IGltYWdlQXNzZXQgPSBhd2FpdCBjYW1lcmEudGFrZVBpY3R1cmUoKTtcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XG4gICAgfVxufSJdfQ==