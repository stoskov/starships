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
                    case 0: return [4 /*yield*/, this.kinveyService.login()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.workOrdersDataStore.find().toPromise()];
                    case 2:
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
                    case 0: return [4 /*yield*/, this.kinveyService.login()];
                    case 1:
                        _a.sent();
                        query = new kinvey_nativescript_sdk_1.Kinvey.Query();
                        query.equalTo("Starship__c", "01tC0000005Z2KEIA0");
                        return [4 /*yield*/, this.workOrdersDataStore.find(query).toPromise()];
                    case 2:
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
                    case 0: return [4 /*yield*/, this.kinveyService.login()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.workOrdersDataStore.findById(workOrderId).toPromise()];
                    case 2:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyxtRUFBaUU7QUFDakUsbUVBQWlEO0FBQ2pELHFFQUE2RDtBQUM3RCxzRUFBbUU7QUFHbkU7SUFJSSwyQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFIeEMsaUJBQVksR0FBRyxnQ0FBZ0MsQ0FBQztRQUNoRCx3QkFBbUIsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFL0MsNENBQWdCLEdBQXRCOzs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQzt3QkFDakIscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBN0QsU0FBUyxHQUFHLFNBQWlEO3dCQUVqRSxzQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztnQ0FDdkIsTUFBTSxDQUFDLElBQUksNEJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDaEMsQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDTDtJQUVLLHFEQUF5QixHQUEvQixVQUFnQyxVQUFrQjs7Ozs7NEJBQzlDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFBO3dCQUUxQixLQUFLLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO3dCQUVuQyxxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBbEUsU0FBUyxHQUFHLFNBQXNEO3dCQUV0RSxzQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztnQ0FDdkIsTUFBTSxDQUFDLElBQUksNEJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDaEMsQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDTDtJQUVLLDRDQUFnQixHQUF0QixVQUF1QixXQUFtQjs7Ozs7NEJBQ3RDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFBO3dCQUVoQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBNUUsU0FBUyxHQUFHLFNBQWdFO3dCQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUV2QixzQkFBTyxJQUFJLDRCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUM7Ozs7S0FDbkM7SUFFSyxxQ0FBUyxHQUFmLFVBQWdCLFdBQVc7Ozs7NEJBQ2hCLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7NEJBQ3ZDLEdBQUcsRUFBRSxXQUFXOzRCQUNoQixNQUFNLEVBQUUsbUNBQWUsQ0FBQyxPQUFPO3lCQUNsQyxDQUFDLEVBQUE7NEJBSEYsc0JBQU8sU0FHTCxFQUFDOzs7O0tBQ047SUFFSyx3Q0FBWSxHQUFsQixVQUFtQixXQUFXOzs7OzRCQUNuQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxHQUFHLEVBQUUsV0FBVzs0QkFDaEIsTUFBTSxFQUFFLG1DQUFlLENBQUMsTUFBTTt5QkFDakMsQ0FBQyxFQUFBOzRCQUhGLHNCQUFPLFNBR0wsRUFBQzs7OztLQUNOO0lBakRRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO2lEQUswQiw4QkFBYTtPQUp2QyxpQkFBaUIsQ0FrRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtpbnZleVNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMva2ludmV5LnNlcnZpY2VcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgV29ya09yZGVyIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy93b3JrLW9yZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBXb3JrT3JkZXJTdGF0dXMgfSBmcm9tICd+L3NoYXJlZC9lbnVtcy93b3JrLW9yZGVyLXN0YXR1cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXb3JrT3JkZXJzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGFyc2hpcHNVcmwgPSBcImh0dHBzOi8vc3dhcGkuY28vYXBpL3N0YXJzaGlwc1wiO1xuICAgIHByaXZhdGUgd29ya09yZGVyc0RhdGFTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbihcImNhc2VcIiwgS2ludmV5LkRhdGFTdG9yZVR5cGUuTmV0d29yayk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtpbnZleVNlcnZpY2U6IEtpbnZleVNlcnZpY2UpIHsgfVxuXG4gICAgYXN5bmMgZ2V0QWxsV29ya09yZGVycygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5raW52ZXlTZXJ2aWNlLmxvZ2luKCk7XG4gICAgICAgIGxldCBvcmRlckxpc3QgPSBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuZmluZCgpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgIHJldHVybiBvcmRlckxpc3QubWFwKChvcmRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JrT3JkZXIob3JkZXIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGdldFdvcmtPcmRlclBlclN0YXJzaGlwSWQoc3RhcnNoaXBJZDogc3RyaW5nKSB7XG4gICAgICAgIGF3YWl0IHRoaXMua2ludmV5U2VydmljZS5sb2dpbigpXG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5LmVxdWFsVG8oXCJTdGFyc2hpcF9fY1wiLCBcIjAxdEMwMDAwMDA1WjJLRUlBMFwiKTtcblxuICAgICAgICBsZXQgb3JkZXJMaXN0ID0gYXdhaXQgdGhpcy53b3JrT3JkZXJzRGF0YVN0b3JlLmZpbmQocXVlcnkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgIHJldHVybiBvcmRlckxpc3QubWFwKChvcmRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JrT3JkZXIob3JkZXIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGdldFdvcmtPcmRlckJ5SWQod29ya09yZGVySWQ6IHN0cmluZykge1xuICAgICAgICBhd2FpdCB0aGlzLmtpbnZleVNlcnZpY2UubG9naW4oKVxuXG4gICAgICAgIGxldCB3b3JrT3JkZXIgPSBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuZmluZEJ5SWQod29ya09yZGVySWQpLnRvUHJvbWlzZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh3b3JrT3JkZXIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgV29ya09yZGVyKHdvcmtPcmRlcik7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRXb3JrKHdvcmtPcmRlcklkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuc2F2ZSh7XG4gICAgICAgICAgICBfaWQ6IHdvcmtPcmRlcklkLFxuICAgICAgICAgICAgU3RhdHVzOiBXb3JrT3JkZXJTdGF0dXMuV29ya2luZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wbGV0ZVdvcmsod29ya09yZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMud29ya09yZGVyc0RhdGFTdG9yZS5zYXZlKHtcbiAgICAgICAgICAgIF9pZDogd29ya09yZGVySWQsXG4gICAgICAgICAgICBTdGF0dXM6IFdvcmtPcmRlclN0YXR1cy5DbG9zZWRcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==