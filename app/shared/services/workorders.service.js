"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var work_order_model_1 = require("~/shared/models/work-order.model");
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
    WorkOrdersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [kinvey_service_1.KinveyService])
    ], WorkOrdersService);
    return WorkOrdersService;
}());
exports.WorkOrdersService = WorkOrdersService;
