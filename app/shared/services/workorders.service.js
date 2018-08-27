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
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.kinveyService.login()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.workOrdersDataStore.find().toPromise()];
                    case 2: return [2 /*return*/, _a.sent()];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyxtRUFBaUU7QUFDakUsbUVBQWlEO0FBQ2pELHFFQUE2RDtBQUM3RCxzRUFBbUU7QUFHbkU7SUFJSSwyQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFIeEMsaUJBQVksR0FBRyxnQ0FBZ0MsQ0FBQztRQUNoRCx3QkFBbUIsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFL0MsNENBQWdCLEdBQXRCOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDO3dCQUMxQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBQXhELHNCQUFPLFNBQWlELEVBQUM7Ozs7S0FDNUQ7SUFFSyxxREFBeUIsR0FBL0IsVUFBZ0MsVUFBa0I7Ozs7OzRCQUM5QyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQTt3QkFFMUIsS0FBSyxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzt3QkFFbkMscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWxFLFNBQVMsR0FBRyxTQUFzRDt3QkFFdEUsc0JBQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7Z0NBQ3ZCLE1BQU0sQ0FBQyxJQUFJLDRCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2hDLENBQUMsQ0FBQyxFQUFBOzs7O0tBQ0w7SUFFSyw0Q0FBZ0IsR0FBdEIsVUFBdUIsV0FBbUI7Ozs7OzRCQUN0QyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQTt3QkFFaEIscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTVFLFNBQVMsR0FBRyxTQUFnRTt3QkFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdkIsc0JBQU8sSUFBSSw0QkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFDOzs7O0tBQ25DO0lBRUsscUNBQVMsR0FBZixVQUFnQixXQUFXOzs7OzRCQUNoQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxHQUFHLEVBQUUsV0FBVzs0QkFDaEIsTUFBTSxFQUFFLG1DQUFlLENBQUMsT0FBTzt5QkFDbEMsQ0FBQyxFQUFBOzRCQUhGLHNCQUFPLFNBR0wsRUFBQzs7OztLQUNOO0lBRUssd0NBQVksR0FBbEIsVUFBbUIsV0FBVzs7Ozs0QkFDbkIscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQzs0QkFDdkMsR0FBRyxFQUFFLFdBQVc7NEJBQ2hCLE1BQU0sRUFBRSxtQ0FBZSxDQUFDLE1BQU07eUJBQ2pDLENBQUMsRUFBQTs0QkFIRixzQkFBTyxTQUdMLEVBQUM7Ozs7S0FDTjtJQTdDUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTtpREFLMEIsOEJBQWE7T0FKdkMsaUJBQWlCLENBOEM3QjtJQUFELHdCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXlTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL2tpbnZleS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IFdvcmtPcmRlciB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbHMvd29yay1vcmRlci5tb2RlbFwiO1xuaW1wb3J0IHsgV29ya09yZGVyU3RhdHVzIH0gZnJvbSAnfi9zaGFyZWQvZW51bXMvd29yay1vcmRlci1zdGF0dXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29ya09yZGVyc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhcnNoaXBzVXJsID0gXCJodHRwczovL3N3YXBpLmNvL2FwaS9zdGFyc2hpcHNcIjtcbiAgICBwcml2YXRlIHdvcmtPcmRlcnNEYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oXCJjYXNlXCIsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBraW52ZXlTZXJ2aWNlOiBLaW52ZXlTZXJ2aWNlKSB7IH1cblxuICAgIGFzeW5jIGdldEFsbFdvcmtPcmRlcnMoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMua2ludmV5U2VydmljZS5sb2dpbigpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy53b3JrT3JkZXJzRGF0YVN0b3JlLmZpbmQoKS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRXb3JrT3JkZXJQZXJTdGFyc2hpcElkKHN0YXJzaGlwSWQ6IHN0cmluZykge1xuICAgICAgICBhd2FpdCB0aGlzLmtpbnZleVNlcnZpY2UubG9naW4oKVxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IEtpbnZleS5RdWVyeSgpO1xuICAgICAgICBxdWVyeS5lcXVhbFRvKFwiU3RhcnNoaXBfX2NcIiwgXCIwMXRDMDAwMDAwNVoyS0VJQTBcIik7XG5cbiAgICAgICAgbGV0IG9yZGVyTGlzdCA9IGF3YWl0IHRoaXMud29ya09yZGVyc0RhdGFTdG9yZS5maW5kKHF1ZXJ5KS50b1Byb21pc2UoKTtcblxuICAgICAgICByZXR1cm4gb3JkZXJMaXN0Lm1hcCgob3JkZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV29ya09yZGVyKG9yZGVyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBnZXRXb3JrT3JkZXJCeUlkKHdvcmtPcmRlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5raW52ZXlTZXJ2aWNlLmxvZ2luKClcblxuICAgICAgICBsZXQgd29ya09yZGVyID0gYXdhaXQgdGhpcy53b3JrT3JkZXJzRGF0YVN0b3JlLmZpbmRCeUlkKHdvcmtPcmRlcklkKS50b1Byb21pc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2cod29ya09yZGVyKTtcblxuICAgICAgICByZXR1cm4gbmV3IFdvcmtPcmRlcih3b3JrT3JkZXIpO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0V29yayh3b3JrT3JkZXJJZCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy53b3JrT3JkZXJzRGF0YVN0b3JlLnNhdmUoe1xuICAgICAgICAgICAgX2lkOiB3b3JrT3JkZXJJZCxcbiAgICAgICAgICAgIFN0YXR1czogV29ya09yZGVyU3RhdHVzLldvcmtpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcGxldGVXb3JrKHdvcmtPcmRlcklkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLndvcmtPcmRlcnNEYXRhU3RvcmUuc2F2ZSh7XG4gICAgICAgICAgICBfaWQ6IHdvcmtPcmRlcklkLFxuICAgICAgICAgICAgU3RhdHVzOiBXb3JrT3JkZXJTdGF0dXMuQ2xvc2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=