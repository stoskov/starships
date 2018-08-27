"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
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
            var imageAsset;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        camera.requestPermissions();
                        return [4 /*yield*/, camera.takePicture()];
                    case 1:
                        imageAsset = _a.sent();
                        this.documentImage.nativeElement.src = imageAsset;
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
    tslib_1.__decorate([
        core_1.ViewChild("documentImg"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], StartWorkComponent.prototype, "documentImage", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtd29yay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC13b3JrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBeUU7QUFDekUsa0VBQXNFO0FBRXRFLDRDQUE4QztBQU05QztJQUlJLDRCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUh0QyxjQUFTLEdBQVcsRUFBRSxDQUFDO0lBR21CLENBQUM7SUFFbEQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBTSxHQUFOO0lBQ0EsQ0FBQztJQUVLLDBDQUFhLEdBQW5COzs7Ozs7d0JBQ0ksTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7d0JBQ1gscUJBQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBdkMsVUFBVSxHQUFHLFNBQTBCO3dCQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDOzs7OztLQUNyRDtJQUVELG1DQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXZCeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7MENBQWdCLGlCQUFVOzZEQUFRO0lBRmxELGtCQUFrQjtRQUo5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQztpREFLOEIsZ0NBQWlCO09BSnBDLGtCQUFrQixDQTBCOUI7SUFBRCx5QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGFydC13b3JrLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJ0V29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHdvcmtPcmRlcjogc3RyaW5nID0gXCJcIjtcbiAgICBAVmlld0NoaWxkKFwiZG9jdW1lbnRJbWdcIikgZG9jdW1lbnRJbWFnZTogRWxlbWVudFJlZjxJbWFnZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMud29ya09yZGVyID0gdGhpcy5wYXJhbXMuY29udGV4dC53b3JrT3JkZXI7XG4gICAgfVxuXG4gICAgb25TYXZlKCkge1xuICAgIH1cblxuICAgIGFzeW5jIG9uVGFrZVBpY3R1cmUoKSB7XG4gICAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICAgICAgbGV0IGltYWdlQXNzZXQgPSBhd2FpdCBjYW1lcmEudGFrZVBpY3R1cmUoKTtcbiAgICAgICAgdGhpcy5kb2N1bWVudEltYWdlLm5hdGl2ZUVsZW1lbnQuc3JjID0gaW1hZ2VBc3NldDtcbiAgICB9XG5cbiAgICBvblNpZ24oKSB7XG5cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlV29yaygpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IGRvbmU6IGZhbHNlIH0pO1xuICAgIH1cbn0iXX0=