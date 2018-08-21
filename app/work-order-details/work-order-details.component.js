"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var starships_service_1 = require("~/shared/services/starships.service");
var workorders_service_1 = require("~/shared/services/workorders.service");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var WorkOrderDetailsComponent = /** @class */ (function () {
    function WorkOrderDetailsComponent(starshipsService, workOrdersService, pageRoute) {
        this.starshipsService = starshipsService;
        this.workOrdersService = workOrdersService;
        this.pageRoute = pageRoute;
        this.starship = {};
        this.isLoading = true;
        this.workOrdersList = [];
    }
    WorkOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            _this.id = params.id;
            // return this.loadData(params.id);
            // return this.loadData("5");
        });
    };
    WorkOrderDetailsComponent.prototype.onTapOrder = function () {
        this.workOrdersService.getAllWorkOrders();
    };
    WorkOrderDetailsComponent.prototype.loadData = function (starshipId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.starshipsService.getStarshipById(starshipId)];
                    case 1:
                        _a.starship = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.workOrdersService.getWorkOrderPerStarshipId(starshipId)];
                    case 2:
                        _b.workOrdersList = _c.sent();
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
            providers: [starships_service_1.StarshipsService, workorders_service_1.WorkOrdersService, kinvey_service_1.KinveyService]
        }),
        tslib_1.__metadata("design:paramtypes", [starships_service_1.StarshipsService,
            workorders_service_1.WorkOrdersService,
            router_1.PageRoute])
    ], WorkOrderDetailsComponent);
    return WorkOrderDetailsComponent;
}());
exports.WorkOrderDetailsComponent = WorkOrderDetailsComponent;
