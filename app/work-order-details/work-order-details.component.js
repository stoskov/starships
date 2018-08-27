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
            // this.id = "500C000001H39DMIAZ";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9FO0FBQ3BFLHlFQUF1RTtBQUN2RSwyRUFBeUU7QUFDekUsc0RBQXdEO0FBQ3hELDRDQUEyQztBQUUzQyxtRUFBaUU7QUFDakUsc0NBQXFDO0FBRXJDLHVFQUFxRTtBQUNyRSxrRUFBMkY7QUFDM0YsNkVBQTBFO0FBQzFFLDBFQUF1RTtBQVN2RTtJQU9JLG1DQUNZLGlCQUFvQyxFQUNwQyx3QkFBeUMsRUFDekMsa0JBQXNDLEVBQ3RDLGdCQUFrQyxFQUNsQyxTQUFvQjtRQUpwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBaUI7UUFDekMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFYaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztJQU9QLENBQUM7SUFFckMsNENBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixrQ0FBa0M7WUFDbEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFD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TSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxzQ0FBaUIsRUFBRSw4QkFBYSxFQUFFLGtDQUFlLEVBQUUsaUNBQWtCLENBQUM7U0FDdkcsQ0FBQztpREFTaUMsc0NBQWlCO1lBQ1Ysa0NBQWU7WUFDckIsaUNBQWtCO1lBQ3BCLHVCQUFnQjtZQUN2QixrQkFBUztPQVp2Qix5QkFBeUIsQ0FrRnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGFyc2hpcHNTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3N0YXJzaGlwcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXJzU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy93b3Jrb3JkZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgV29ya09yZGVyIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy93b3JrLW9yZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBLaW52ZXlTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL2tpbnZleS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFdvcmtPcmRlckNvbW1lbnQgfSBmcm9tICd+L3NoYXJlZC9tb2RlbHMvd29yay1vcmRlci1jb21tZW50Lm1vZGVsJztcbmltcG9ydCB7IENvbW1lbnRzU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL2NvbW1lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBBZGRDb21tZW50Q29tcG9uZW50IH0gZnJvbSAnfi9hZGQtY29tbWVudC9hZGQtY29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhcnRXb3JrQ29tcG9uZW50IH0gZnJvbSAnfi9zdGFydC13b3JrL3N0YXJ0LXdvcmsuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi93b3JrLW9yZGVyLWRldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vd29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbU3RhcnNoaXBzU2VydmljZSwgV29ya09yZGVyc1NlcnZpY2UsIEtpbnZleVNlcnZpY2UsIENvbW1lbnRzU2VydmljZSwgTW9kYWxEaWFsb2dTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JrT3JkZXJEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzdGFyc2hpcDogT2JqZWN0ID0ge307XG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBpZDogc3RyaW5nO1xuICAgIHdvcmtPcmRlcjogV29ya09yZGVyO1xuICAgIGNvbW1lbnRzTGlzdDogQXJyYXk8V29ya09yZGVyQ29tbWVudD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHdvcmtPcmRlcnNTZXJ2aWNlOiBXb3JrT3JkZXJzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB3b3JrT3JkZXJDb21tZW50c1NlcnZpY2U6IENvbW1lbnRzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbERpYWxvZ1NlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlkID0gXCI1MDBDMDAwMDAxSDM5RE1JQVpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zLmlkOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh0aGlzLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIG9uU3RhcnRXb3JrKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gU3RhcnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGJlZ2luIHdvcmsgb24gdGhpcyB3b3JrIG9yZGVyP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlN0YXJ0XCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjb25maXJtUmVzdWx0ID0gYXdhaXQgY29uZmlybShvcHRpb25zKTtcblxuICAgICAgICBpZiAoIWNvbmZpcm1SZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtEZXRhaWxzT3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHdvcmtPcmRlcjogdGhpcy53b3JrT3JkZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy53b3JrT3JkZXJzU2VydmljZS5zdGFydFdvcmsodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5tb2RhbERpYWxvZ1NlcnZpY2Uuc2hvd01vZGFsKFN0YXJ0V29ya0NvbXBvbmVudCwgd29ya0RldGFpbHNPcHRpb25zKTtcblxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMud29ya09yZGVyc1NlcnZpY2UuY29tcGxldGVXb3JrKHRoaXMuaWQpO1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIGFzeW5jIGFkZENvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RhbERpYWxvZ1NlcnZpY2Uuc2hvd01vZGFsKEFkZENvbW1lbnRDb21wb25lbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLndvcmtPcmRlckNvbW1lbnRzU2VydmljZS5hZGRDb21tZW50KHRoaXMuaWQsIHJlc3VsdC5jb21tZW50KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWREYXRhKHdvcmtPcmRlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMud29ya09yZGVyID0gYXdhaXQgdGhpcy53b3JrT3JkZXJzU2VydmljZS5nZXRXb3JrT3JkZXJCeUlkKHdvcmtPcmRlcklkKTtcbiAgICAgICAgdGhpcy5jb21tZW50c0xpc3QgPSBhd2FpdCB0aGlzLndvcmtPcmRlckNvbW1lbnRzU2VydmljZS5nZXRDb21tZW50c0J5T3JkZXJJZCh3b3JrT3JkZXJJZCk7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=