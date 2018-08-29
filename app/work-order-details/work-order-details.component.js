"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var starships_service_1 = require("~/shared/services/starships.service");
var workorders_service_1 = require("~/shared/services/workorders.service");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var dialogs_1 = require("ui/dialogs");
var comments_service_1 = require("~/shared/services/comments.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var add_comment_component_1 = require("~/add-comment/add-comment.component");
var start_work_component_1 = require("~/start-work/start-work.component");
var WorkOrderDetailsComponent = /** @class */ (function () {
    function WorkOrderDetailsComponent(workOrdersService, workOrderCommentsService, modalDialogService, viewContainerRef, pageRoute) {
        this.workOrdersService = workOrdersService;
        this.workOrderCommentsService = workOrderCommentsService;
        this.modalDialogService = modalDialogService;
        this.viewContainerRef = viewContainerRef;
        this.pageRoute = pageRoute;
        this.starship = {};
        this.isLoading = true;
        this.commentsList = [];
    }
    WorkOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            _this.id = params.id;
            return _this.loadData(_this.id);
        });
    };
    WorkOrderDetailsComponent.prototype.onStartWork = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, confirmResult, workDetailsOptions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            title: "Confirm Start",
                            message: "Are you sure you want to begin work on this work order?",
                            okButtonText: "Start",
                            cancelButtonText: "Cancel",
                        };
                        return [4 /*yield*/, dialogs_1.confirm(options)];
                    case 1:
                        confirmResult = _a.sent();
                        if (!confirmResult) {
                            return [2 /*return*/];
                        }
                        workDetailsOptions = {
                            viewContainerRef: this.viewContainerRef,
                            context: {
                                workOrder: this.workOrder
                            },
                            fullscreen: true,
                        };
                        this.isLoading = true;
                        return [4 /*yield*/, this.workOrdersService.startWork(this.id)];
                    case 2:
                        _a.sent();
                        this.isLoading = false;
                        return [4 /*yield*/, this.modalDialogService.showModal(start_work_component_1.StartWorkComponent, workDetailsOptions)];
                    case 3:
                        _a.sent();
                        this.isLoading = true;
                        return [4 /*yield*/, this.workOrdersService.completeWork(this.id)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadData(this.id)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkOrderDetailsComponent.prototype.addComment = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            viewContainerRef: this.viewContainerRef,
                            context: {},
                            fullscreen: true,
                        };
                        return [4 /*yield*/, this.modalDialogService.showModal(add_comment_component_1.AddCommentComponent, options)];
                    case 1:
                        result = _a.sent();
                        if (!result.save) return [3 /*break*/, 3];
                        this.isLoading = true;
                        this.workOrderCommentsService.addComment(this.id, result.comment);
                        return [4 /*yield*/, this.loadData(this.id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WorkOrderDetailsComponent.prototype.loadData = function (workOrderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isLoading = true;
                        _a = this;
                        return [4 /*yield*/, this.workOrdersService.getWorkOrderById(workOrderId)];
                    case 1:
                        _a.workOrder = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.workOrderCommentsService.getCommentsByOrderId(workOrderId)];
                    case 2:
                        _b.commentsList = _c.sent();
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkOrderDetailsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./work-order-details.component.html",
            styleUrls: ["./work-order-details.component.css"],
            providers: [starships_service_1.StarshipsService, workorders_service_1.WorkOrdersService, kinvey_service_1.KinveyService, comments_service_1.CommentsService, modal_dialog_1.ModalDialogService]
        }),
        tslib_1.__metadata("design:paramtypes", [workorders_service_1.WorkOrdersService,
            comments_service_1.CommentsService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.PageRoute])
    ], WorkOrderDetailsComponent);
    return WorkOrderDetailsComponent;
}());
exports.WorkOrderDetailsComponent = WorkOrderDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9FO0FBQ3BFLHlFQUF1RTtBQUN2RSwyRUFBeUU7QUFDekUsc0RBQXdEO0FBQ3hELDRDQUEyQztBQUUzQyxtRUFBaUU7QUFDakUsc0NBQXFDO0FBRXJDLHVFQUFxRTtBQUNyRSxrRUFBMkY7QUFDM0YsNkVBQTBFO0FBQzFFLDBFQUF1RTtBQVN2RTtJQU9JLG1DQUNZLGlCQUFvQyxFQUNwQyx3QkFBeUMsRUFDekMsa0JBQXNDLEVBQ3RDLGdCQUFrQyxFQUNsQyxTQUFvQjtRQUpwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBaUI7UUFDekMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFYaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztJQU9QLENBQUM7SUFFckMsNENBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lB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QUNuQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLHNDQUFpQixFQUFFLDhCQUFhLEVBQUUsa0NBQWUsRUFBRSxpQ0FBa0IsQ0FBQztTQUN2RyxDQUFDO2lEQVNpQyxzQ0FBaUI7WUFDVixrQ0FBZTtZQUNyQixpQ0FBa0I7WUFDcEIsdUJBQWdCO1lBQ3ZCLGtCQUFTO09BWnZCLHlCQUF5QixDQWlGckM7SUFBRCxnQ0FBQztDQUFBLEFBakZELElBaUZDO0FBakZZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0YXJzaGlwc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMvc3RhcnNoaXBzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdvcmtPcmRlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3dvcmtvcmRlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXIgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3dvcmstb3JkZXIubW9kZWxcIjtcbmltcG9ydCB7IEtpbnZleVNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMva2ludmV5LnNlcnZpY2VcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgV29ya09yZGVyQ29tbWVudCB9IGZyb20gJ34vc2hhcmVkL21vZGVscy93b3JrLW9yZGVyLWNvbW1lbnQubW9kZWwnO1xuaW1wb3J0IHsgQ29tbWVudHNTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvY29tbWVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IEFkZENvbW1lbnRDb21wb25lbnQgfSBmcm9tICd+L2FkZC1jb21tZW50L2FkZC1jb21tZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFydFdvcmtDb21wb25lbnQgfSBmcm9tICd+L3N0YXJ0LXdvcmsvc3RhcnQtd29yay5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi93b3JrLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtTdGFyc2hpcHNTZXJ2aWNlLCBXb3JrT3JkZXJzU2VydmljZSwgS2ludmV5U2VydmljZSwgQ29tbWVudHNTZXJ2aWNlLCBNb2RhbERpYWxvZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtPcmRlckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXJzaGlwOiBPYmplY3QgPSB7fTtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgd29ya09yZGVyOiBXb3JrT3JkZXI7XG4gICAgY29tbWVudHNMaXN0OiBBcnJheTxXb3JrT3JkZXJDb21tZW50PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgd29ya09yZGVyc1NlcnZpY2U6IFdvcmtPcmRlcnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHdvcmtPcmRlckNvbW1lbnRzU2VydmljZTogQ29tbWVudHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsRGlhbG9nU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuaWQ7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHRoaXMuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25TdGFydFdvcmsoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybSBTdGFydFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gYmVnaW4gd29yayBvbiB0aGlzIHdvcmsgb3JkZXI/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU3RhcnRcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNvbmZpcm1SZXN1bHQgPSBhd2FpdCBjb25maXJtKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghY29uZmlybVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29ya0RldGFpbHNPcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgd29ya09yZGVyOiB0aGlzLndvcmtPcmRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLndvcmtPcmRlcnNTZXJ2aWNlLnN0YXJ0V29yayh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICBhd2FpdCB0aGlzLm1vZGFsRGlhbG9nU2VydmljZS5zaG93TW9kYWwoU3RhcnRXb3JrQ29tcG9uZW50LCB3b3JrRGV0YWlsc09wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy53b3JrT3JkZXJzU2VydmljZS5jb21wbGV0ZVdvcmsodGhpcy5pZCk7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGFsRGlhbG9nU2VydmljZS5zaG93TW9kYWwoQWRkQ29tbWVudENvbXBvbmVudCwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zYXZlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMud29ya09yZGVyQ29tbWVudHNTZXJ2aWNlLmFkZENvbW1lbnQodGhpcy5pZCwgcmVzdWx0LmNvbW1lbnQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZERhdGEod29ya09yZGVySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy53b3JrT3JkZXIgPSBhd2FpdCB0aGlzLndvcmtPcmRlcnNTZXJ2aWNlLmdldFdvcmtPcmRlckJ5SWQod29ya09yZGVySWQpO1xuICAgICAgICB0aGlzLmNvbW1lbnRzTGlzdCA9IGF3YWl0IHRoaXMud29ya09yZGVyQ29tbWVudHNTZXJ2aWNlLmdldENvbW1lbnRzQnlPcmRlcklkKHdvcmtPcmRlcklkKTtcblxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==