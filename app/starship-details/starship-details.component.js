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
    function StarshipDetailsComponent(starshipsService, workOrdersService, routerExtensions, pageRoute) {
        this.starshipsService = starshipsService;
        this.workOrdersService = workOrdersService;
        this.routerExtensions = routerExtensions;
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
    StarshipDetailsComponent.prototype.onTapOrder = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this.routerExtensions.navigate([{ outlets: { starships: ["work-order-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
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
            router_1.RouterExtensions,
            router_1.PageRoute])
    ], StarshipDetailsComponent);
    return StarshipDetailsComponent;
}());
exports.StarshipDetailsComponent = StarshipDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyc2hpcC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQseUVBQXVFO0FBQ3ZFLDJFQUF5RTtBQUV6RSxzREFBMEU7QUFDMUUsNENBQTJDO0FBRTNDLG1FQUFpRTtBQVNqRTtJQUtJLGtDQUNZLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLFNBQW9CO1FBSHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFSaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQXFCLEVBQUUsQ0FBQTtJQU1ELENBQUM7SUFFckMsMkNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixtQ0FBbUM7WUFDbkMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkNBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUUvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDbkcsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWEsMkNBQVEsR0FBdEIsVUFBdUIsVUFBa0I7Ozs7Ozt3QkFDckMsS0FBQSxJQUFJLENBQUE7d0JBQVkscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQXZFLEdBQUssUUFBUSxHQUFHLFNBQXVELENBQUM7d0JBQ3hFLEtBQUEsSUFBSSxDQUFBO3dCQUFrQixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF4RixHQUFLLGNBQWMsR0FBRyxTQUFrRSxDQUFDO3dCQUV6RixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7S0FDMUI7SUF0Q1Esd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxzQ0FBaUIsRUFBRSw4QkFBYSxDQUFDO1NBQ2xFLENBQUM7aURBT2dDLG9DQUFnQjtZQUNmLHNDQUFpQjtZQUNsQix5QkFBZ0I7WUFDdkIsa0JBQVM7T0FUdkIsd0JBQXdCLENBdUNwQztJQUFELCtCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXBzU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9zdGFyc2hpcHMuc2VydmljZVwiO1xuaW1wb3J0IHsgV29ya09yZGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMvd29ya29yZGVycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdGFyc2hpcCB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbHMvc3RhcnNoaXAubW9kZWxcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgV29ya09yZGVyIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy93b3JrLW9yZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBLaW52ZXlTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL2tpbnZleS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zdGFyc2hpcC1kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbU3RhcnNoaXBzU2VydmljZSwgV29ya09yZGVyc1NlcnZpY2UsIEtpbnZleVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJzaGlwRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3RhcnNoaXA6IE9iamVjdCA9IHt9O1xuICAgIGlzTG9hZGluZyA9IHRydWU7XG4gICAgd29ya09yZGVyc0xpc3Q6IEFycmF5PFdvcmtPcmRlcj4gPSBbXVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RhcnNoaXBzU2VydmljZTogU3RhcnNoaXBzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB3b3JrT3JkZXJzU2VydmljZTogV29ya09yZGVyc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcykpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubG9hZERhdGEocGFyYW1zLmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YShcIjVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhcE9yZGVyKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgdGFwcGVkQ2FySXRlbSA9IGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcblxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3sgb3V0bGV0czogeyBzdGFyc2hpcHM6IFtcIndvcmstb3JkZXItZGV0YWlsc1wiLCB0YXBwZWRDYXJJdGVtLmlkXSB9IH1dLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkRGF0YShzdGFyc2hpcElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFyc2hpcCA9IGF3YWl0IHRoaXMuc3RhcnNoaXBzU2VydmljZS5nZXRTdGFyc2hpcEJ5SWQoc3RhcnNoaXBJZCk7XG4gICAgICAgIHRoaXMud29ya09yZGVyc0xpc3QgPSBhd2FpdCB0aGlzLndvcmtPcmRlcnNTZXJ2aWNlLmdldFdvcmtPcmRlclBlclN0YXJzaGlwSWQoc3RhcnNoaXBJZCk7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=