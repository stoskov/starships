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
            _this.id = "500C000001H39DMIAZ";
            // this.id = params.id;                
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9FO0FBQ3BFLHlFQUF1RTtBQUN2RSwyRUFBeUU7QUFDekUsc0RBQXdEO0FBQ3hELDRDQUEyQztBQUUzQyxtRUFBaUU7QUFDakUsc0NBQXFDO0FBRXJDLHVFQUFxRTtBQUNyRSxrRUFBMkY7QUFDM0YsNkVBQTBFO0FBQzFFLDBFQUF1RTtBQVN2RTtJQU9JLG1DQUNZLGlCQUFvQyxFQUNwQyx3QkFBeUMsRUFDekMsa0JBQXNDLEVBQ3RDLGdCQUFrQyxFQUNsQyxTQUFvQjtRQUpwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBaUI7UUFDekMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFYaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztJQU9QLENBQUM7SUFFckMsNENBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsRUFBRSxHQUFHLG9CQUFvQixDQUFDO1lBQy9CLHVDQUF1QztZQUN2QyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENB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QUFFO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7WUFDakQsU0FBUyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsc0NBQWlCLEVBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLGlDQUFrQixDQUFDO1NBQ3ZHLENBQUM7aURBU2lDLHNDQUFpQjtZQUNWLGtDQUFlO1lBQ3JCLGlDQUFrQjtZQUNwQix1QkFBZ0I7WUFDdkIsa0JBQVM7T0FadkIseUJBQXlCLENBa0ZyQztJQUFELGdDQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXBzU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9zdGFyc2hpcHMuc2VydmljZVwiO1xuaW1wb3J0IHsgV29ya09yZGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMvd29ya29yZGVycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFdvcmtPcmRlciB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbHMvd29yay1vcmRlci5tb2RlbFwiO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZVwiO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXJDb21tZW50IH0gZnJvbSAnfi9zaGFyZWQvbW9kZWxzL3dvcmstb3JkZXItY29tbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBDb21tZW50c1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9jb21tZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgQWRkQ29tbWVudENvbXBvbmVudCB9IGZyb20gJ34vYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXJ0V29ya0NvbXBvbmVudCB9IGZyb20gJ34vc3RhcnQtd29yay9zdGFydC13b3JrLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vd29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3dvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1N0YXJzaGlwc1NlcnZpY2UsIFdvcmtPcmRlcnNTZXJ2aWNlLCBLaW52ZXlTZXJ2aWNlLCBDb21tZW50c1NlcnZpY2UsIE1vZGFsRGlhbG9nU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgV29ya09yZGVyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3RhcnNoaXA6IE9iamVjdCA9IHt9O1xuICAgIGlzTG9hZGluZyA9IHRydWU7XG4gICAgaWQ6IHN0cmluZztcbiAgICB3b3JrT3JkZXI6IFdvcmtPcmRlcjtcbiAgICBjb21tZW50c0xpc3Q6IEFycmF5PFdvcmtPcmRlckNvbW1lbnQ+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB3b3JrT3JkZXJzU2VydmljZTogV29ya09yZGVyc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgd29ya09yZGVyQ29tbWVudHNTZXJ2aWNlOiBDb21tZW50c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxEaWFsb2dTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcykpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IFwiNTAwQzAwMDAwMUgzOURNSUFaXCI7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pZCA9IHBhcmFtcy5pZDsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEodGhpcy5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBvblN0YXJ0V29yaygpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtIFN0YXJ0XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBiZWdpbiB3b3JrIG9uIHRoaXMgd29yayBvcmRlcj9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTdGFydFwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY29uZmlybVJlc3VsdCA9IGF3YWl0IGNvbmZpcm0ob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKCFjb25maXJtUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JrRGV0YWlsc09wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB3b3JrT3JkZXI6IHRoaXMud29ya09yZGVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMud29ya09yZGVyc1NlcnZpY2Uuc3RhcnRXb3JrKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGF3YWl0IHRoaXMubW9kYWxEaWFsb2dTZXJ2aWNlLnNob3dNb2RhbChTdGFydFdvcmtDb21wb25lbnQsIHdvcmtEZXRhaWxzT3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLndvcmtPcmRlcnNTZXJ2aWNlLmNvbXBsZXRlV29yayh0aGlzLmlkKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBhc3luYyBhZGRDb21tZW50KCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kYWxEaWFsb2dTZXJ2aWNlLnNob3dNb2RhbChBZGRDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKTtcblxuICAgICAgICBpZiAocmVzdWx0LnNhdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy53b3JrT3JkZXJDb21tZW50c1NlcnZpY2UuYWRkQ29tbWVudCh0aGlzLmlkLCByZXN1bHQuY29tbWVudCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkRGF0YSh3b3JrT3JkZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndvcmtPcmRlciA9IGF3YWl0IHRoaXMud29ya09yZGVyc1NlcnZpY2UuZ2V0V29ya09yZGVyQnlJZCh3b3JrT3JkZXJJZCk7XG4gICAgICAgIHRoaXMuY29tbWVudHNMaXN0ID0gYXdhaXQgdGhpcy53b3JrT3JkZXJDb21tZW50c1NlcnZpY2UuZ2V0Q29tbWVudHNCeU9yZGVySWQod29ya09yZGVySWQpO1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxufVxuIl19