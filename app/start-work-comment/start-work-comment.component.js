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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtd29yay1jb21tZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJ0LXdvcmstY29tbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELGtFQUFzRTtBQUN0RSxrQ0FBaUM7QUFDakMsNENBQThDO0FBUTlDO0lBR0ksNEJBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRnRDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBRWlCLENBQUM7SUFFbEQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUssMENBQWEsR0FBbkI7Ozs7OzRCQUNxQixxQkFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF2QyxVQUFVLEdBQUcsU0FBMEI7d0JBQ3ZDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO3dCQUN4QixLQUFLLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQzs7Ozs7S0FDMUI7SUFoQlEsa0JBQWtCO1FBSjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO2lEQUk4QixnQ0FBaUI7T0FIcEMsa0JBQWtCLENBaUI5QjtJQUFELHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXJ0LXdvcmsuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRXb3JrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY29tbWVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgb25TYXZlKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsgc2F2ZTogdHJ1ZSwgY29tbWVudDogdGhpcy5jb21tZW50VGV4dCB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBvblRha2VQaWN0dXJlKCkge1xuICAgICAgICBsZXQgaW1hZ2VBc3NldCA9IGF3YWl0IGNhbWVyYS50YWtlUGljdHVyZSgpO1xuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICB9XG59Il19