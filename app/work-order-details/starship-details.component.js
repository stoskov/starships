"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var starships_service_1 = require("~/shared/services/starships.service");
var workorders_service_1 = require("~/shared/services/workorders.service");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var StarshipDetailsComponent = /** @class */ (function () {
    function StarshipDetailsComponent(starshipsService, workOrdersService, pageRoute) {
        this.starshipsService = starshipsService;
        this.workOrdersService = workOrdersService;
        this.pageRoute = pageRoute;
        this.starship = {};
        this.isLoading = true;
        this.workOrdersList = [];
    }
    StarshipDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            // return this.loadData(params.id);
            return _this.loadData("5");
        });
    };
    StarshipDetailsComponent.prototype.onTapOrder = function () {
        this.workOrdersService.getAllWorkOrders();
    };
    StarshipDetailsComponent.prototype.loadData = function (starshipId) {
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
    StarshipDetailsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./starship-details.component.html",
            styleUrls: ["./starship-details.component.css"],
            providers: [starships_service_1.StarshipsService, workorders_service_1.WorkOrdersService, kinvey_service_1.KinveyService]
        }),
        tslib_1.__metadata("design:paramtypes", [starships_service_1.StarshipsService,
            workorders_service_1.WorkOrdersService,
            router_1.PageRoute])
    ], StarshipDetailsComponent);
    return StarshipDetailsComponent;
}());
exports.StarshipDetailsComponent = StarshipDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyc2hpcC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQseUVBQXVFO0FBQ3ZFLDJFQUF5RTtBQUV6RSxzREFBd0Q7QUFDeEQsNENBQTJDO0FBRTNDLG1FQUFpRTtBQVNqRTtJQUtJLGtDQUNZLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFDcEMsU0FBb0I7UUFGcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFQaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQXFCLEVBQUUsQ0FBQTtJQUtELENBQUM7SUFFckMsMkNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixtQ0FBbUM7WUFDbkMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFYSwyQ0FBUSxHQUF0QixVQUF1QixVQUFrQjs7Ozs7O3dCQUNyQyxLQUFBLElBQUksQ0FBQTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBdkUsR0FBSyxRQUFRLEdBQUcsU0FBdUQsQ0FBQzt3QkFDeEUsS0FBQSxJQUFJLENBQUE7d0JBQWtCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQXhGLEdBQUssY0FBYyxHQUFHLFNBQWtFLENBQUM7d0JBRXpGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7OztLQUMxQjtJQTVCUSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLHNDQUFpQixFQUFFLDhCQUFhLENBQUM7U0FDbEUsQ0FBQztpREFPZ0Msb0NBQWdCO1lBQ2Ysc0NBQWlCO1lBQ3pCLGtCQUFTO09BUnZCLHdCQUF3QixDQTZCcEM7SUFBRCwrQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0YXJzaGlwc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMvc3RhcnNoaXBzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdvcmtPcmRlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3dvcmtvcmRlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFdvcmtPcmRlciB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbHMvd29yay1vcmRlci5tb2RlbFwiO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXJzaGlwLWRldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1N0YXJzaGlwc1NlcnZpY2UsIFdvcmtPcmRlcnNTZXJ2aWNlLCBLaW52ZXlTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyc2hpcERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXJzaGlwOiBPYmplY3QgPSB7fTtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIHdvcmtPcmRlcnNMaXN0OiBBcnJheTxXb3JrT3JkZXI+ID0gW11cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0YXJzaGlwc1NlcnZpY2U6IFN0YXJzaGlwc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgd29ya09yZGVyc1NlcnZpY2U6IFdvcmtPcmRlcnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5sb2FkRGF0YShwYXJhbXMuaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKFwiNVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFwT3JkZXIoKSB7XG4gICAgICAgIHRoaXMud29ya09yZGVyc1NlcnZpY2UuZ2V0QWxsV29ya09yZGVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZERhdGEoc3RhcnNoaXBJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnNoaXAgPSBhd2FpdCB0aGlzLnN0YXJzaGlwc1NlcnZpY2UuZ2V0U3RhcnNoaXBCeUlkKHN0YXJzaGlwSWQpO1xuICAgICAgICB0aGlzLndvcmtPcmRlcnNMaXN0ID0gYXdhaXQgdGhpcy53b3JrT3JkZXJzU2VydmljZS5nZXRXb3JrT3JkZXJQZXJTdGFyc2hpcElkKHN0YXJzaGlwSWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=