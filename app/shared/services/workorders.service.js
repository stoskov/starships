"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var work_order_model_1 = require("~/shared/models/work-order.model");
var work_order_status_1 = require("~/shared/enums/work-order-status");
var WorkOrdersService = /** @class */ (function () {
    function WorkOrdersService(kinveyService) {
        this.kinveyService = kinveyService;
        this.starshipsUrl = "https://swapi.co/api/starships";
        this.workOrdersDataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("case", kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
    }
    WorkOrdersService.prototype.getAllWorkOrders = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var orderList;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workOrdersDataStore.find().toPromise()];
                    case 1:
                        orderList = _a.sent();
                        return [2 /*return*/, orderList.map(function (order) {
                                return new work_order_model_1.WorkOrder(order);
                            })];
                }
            });
        });
    };
    WorkOrdersService.prototype.getWorkOrderPerStarshipId = function (starshipId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, orderList;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new kinvey_nativescript_sdk_1.Kinvey.Query();
                        query.equalTo("Starship__c", "01tC0000005Z2KEIA0");
                        return [4 /*yield*/, this.workOrdersDataStore.find(query).toPromise()];
                    case 1:
                        orderList = _a.sent();
                        return [2 /*return*/, orderList.map(function (order) {
                                return new work_order_model_1.WorkOrder(order);
                            })];
                }
            });
        });
    };
    WorkOrdersService.prototype.getWorkOrderById = function (workOrderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var workOrder;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workOrdersDataStore.findById(workOrderId).toPromise()];
                    case 1:
                        workOrder = _a.sent();
                        console.log(workOrder);
                        return [2 /*return*/, new work_order_model_1.WorkOrder(workOrder)];
                }
            });
        });
    };
    WorkOrdersService.prototype.startWork = function (workOrderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workOrdersDataStore.save({
                            _id: workOrderId,
                            Status: work_order_status_1.WorkOrderStatus.Working
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WorkOrdersService.prototype.completeWork = function (workOrderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workOrdersDataStore.save({
                            _id: workOrderId,
                            Status: work_order_status_1.WorkOrderStatus.Closed
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WorkOrdersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [kinvey_service_1.KinveyService])
    ], WorkOrdersService);
    return WorkOrdersService;
}());
exports.WorkOrdersService = WorkOrdersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyxtRUFBaUU7QUFDakUsbUVBQWlEO0FBQ2pELHFFQUE2RDtBQUM3RCxzRUFBbUU7QUFHbkU7SUFJSSwyQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFIeEMsaUJBQVksR0FBRyxnQ0FBZ0MsQ0FBQztRQUNoRCx3QkFBbUIsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFL0MsNENBQWdCLEdBQXRCOzs7Ozs0QkFDb0IscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBN0QsU0FBUyxHQUFHLFNBQWlEO3dCQUVqRSxzQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztnQ0FDdkIsTUFBTSxDQUFDLElBQUksNEJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDaEMsQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDTDtJQUVLLHFEQUF5QixHQUEvQixVQUFnQyxVQUFrQjs7Ozs7O3dCQUN4QyxLQUFLLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO3dCQUVuQyxxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBbEUsU0FBUyxHQUFHLFNBQXNEO3dCQUV0RSxzQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztnQ0FDdkIsTUFBTSxDQUFDLElBQUksNEJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDaEMsQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDTDtJQUVLLDRDQUFnQixHQUF0QixVQUF1QixXQUFtQjs7Ozs7NEJBQ3RCLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE1RSxTQUFTLEdBQUcsU0FBZ0U7d0JBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBRXZCLHNCQUFPLElBQUksNEJBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQzs7OztLQUNuQztJQUVLLHFDQUFTLEdBQWYsVUFBZ0IsV0FBVzs7Ozs0QkFDaEIscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQzs0QkFDdkMsR0FBRyxFQUFFLFdBQVc7NEJBQ2hCLE1BQU0sRUFBRSxtQ0FBZSxDQUFDLE9BQU87eUJBQ2xDLENBQUMsRUFBQTs0QkFIRixzQkFBTyxTQUdMLEVBQUM7Ozs7S0FDTjtJQUVLLHdDQUFZLEdBQWxCLFVBQW1CLFdBQVc7Ozs7NEJBQ25CLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7NEJBQ3ZDLEdBQUcsRUFBRSxXQUFXOzRCQUNoQixNQUFNLEVBQUUsbUNBQWUsQ0FBQyxNQUFNO3lCQUNqQyxDQUFDLEVBQUE7NEJBSEYsc0JBQU8sU0FHTCxFQUFDOzs7O0tBQ047SUE1Q1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7aURBSzBCLDhCQUFhO09BSnZDLGlCQUFpQixDQTZDN0I7SUFBRCx3QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXIgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3dvcmstb3JkZXIubW9kZWxcIjtcbmltcG9ydCB7IFdvcmtPcmRlclN0YXR1cyB9IGZyb20gJ34vc2hhcmVkL2VudW1zL3dvcmstb3JkZXItc3RhdHVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdvcmtPcmRlcnNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXJzaGlwc1VybCA9IFwiaHR0cHM6Ly9zd2FwaS5jby9hcGkvc3RhcnNoaXBzXCI7XG4gICAgcHJpdmF0ZSB3b3JrT3JkZXJzRGF0YVN0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKFwiY2FzZVwiLCBLaW52ZXkuRGF0YVN0b3JlVHlwZS5OZXR3b3JrKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUga2ludmV5U2VydmljZTogS2ludmV5U2VydmljZSkgeyB9XG5cbiAgICBhc3luYyBnZXRBbGxXb3JrT3JkZXJzKCkge1xuICAgICAgICBsZXQgb3JkZXJMaXN0ID0gYXdhaXQgdGhpcy53b3JrT3JkZXJzRGF0YVN0b3JlLmZpbmQoKS50b1Byb21pc2UoKTtcblxuICAgICAgICByZXR1cm4gb3JkZXJMaXN0Lm1hcCgob3JkZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV29ya09yZGVyKG9yZGVyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBnZXRXb3JrT3JkZXJQZXJTdGFyc2hpcElkKHN0YXJzaGlwSWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBLaW52ZXkuUXVlcnkoKTtcbiAgICAgICAgcXVlcnkuZXF1YWxUbyhcIlN0YXJzaGlwX19jXCIsIFwiMDF0QzAwMDAwMDVaMktFSUEwXCIpO1xuXG4gICAgICAgIGxldCBvcmRlckxpc3QgPSBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuZmluZChxdWVyeSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIG9yZGVyTGlzdC5tYXAoKG9yZGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdvcmtPcmRlcihvcmRlcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0V29ya09yZGVyQnlJZCh3b3JrT3JkZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB3b3JrT3JkZXIgPSBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuZmluZEJ5SWQod29ya09yZGVySWQpLnRvUHJvbWlzZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh3b3JrT3JkZXIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgV29ya09yZGVyKHdvcmtPcmRlcik7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRXb3JrKHdvcmtPcmRlcklkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuc2F2ZSh7XG4gICAgICAgICAgICBfaWQ6IHdvcmtPcmRlcklkLFxuICAgICAgICAgICAgU3RhdHVzOiBXb3JrT3JkZXJTdGF0dXMuV29ya2luZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wbGV0ZVdvcmsod29ya09yZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMud29ya09yZGVyc0RhdGFTdG9yZS5zYXZlKHtcbiAgICAgICAgICAgIF9pZDogd29ya09yZGVySWQsXG4gICAgICAgICAgICBTdGF0dXM6IFdvcmtPcmRlclN0YXR1cy5DbG9zZWRcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==