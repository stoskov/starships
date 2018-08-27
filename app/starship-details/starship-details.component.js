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
            return _this.loadData(params.id);
            // return this.loadData("5");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyc2hpcC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQseUVBQXVFO0FBQ3ZFLDJFQUF5RTtBQUV6RSxzREFBMEU7QUFDMUUsNENBQTJDO0FBRTNDLG1FQUFpRTtBQVNqRTtJQUtJLGtDQUNZLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLFNBQW9CO1FBSHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFSaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQXFCLEVBQUUsQ0FBQTtJQU1ELENBQUM7SUFFckMsMkNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsNkJBQTZCO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDZDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ25HLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVhLDJDQUFRLEdBQXRCLFVBQXVCLFVBQWtCOzs7Ozs7d0JBQ3JDLEtBQUEsSUFBSSxDQUFBO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF2RSxHQUFLLFFBQVEsR0FBRyxTQUF1RCxDQUFDO3dCQUN4RSxLQUFBLElBQUksQ0FBQTt3QkFBa0IscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBeEYsR0FBSyxjQUFjLEdBQUcsU0FBa0UsQ0FBQzt3QkFFekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7O0tBQzFCO0lBdENRLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7WUFDL0MsU0FBUyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsc0NBQWlCLEVBQUUsOEJBQWEsQ0FBQztTQUNsRSxDQUFDO2lEQU9nQyxvQ0FBZ0I7WUFDZixzQ0FBaUI7WUFDbEIseUJBQWdCO1lBQ3ZCLGtCQUFTO09BVHZCLHdCQUF3QixDQXVDcEM7SUFBRCwrQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0YXJzaGlwc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMvc3RhcnNoaXBzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdvcmtPcmRlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3dvcmtvcmRlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFdvcmtPcmRlciB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbHMvd29yay1vcmRlci5tb2RlbFwiO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9raW52ZXkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXJzaGlwLWRldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1N0YXJzaGlwc1NlcnZpY2UsIFdvcmtPcmRlcnNTZXJ2aWNlLCBLaW52ZXlTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyc2hpcERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXJzaGlwOiBPYmplY3QgPSB7fTtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIHdvcmtPcmRlcnNMaXN0OiBBcnJheTxXb3JrT3JkZXI+ID0gW11cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0YXJzaGlwc1NlcnZpY2U6IFN0YXJzaGlwc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgd29ya09yZGVyc1NlcnZpY2U6IFdvcmtPcmRlcnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHBhcmFtcy5pZCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMubG9hZERhdGEoXCI1XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25UYXBPcmRlcihhcmdzKSB7XG4gICAgICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgc3RhcnNoaXBzOiBbXCJ3b3JrLW9yZGVyLWRldGFpbHNcIiwgdGFwcGVkQ2FySXRlbS5pZF0gfSB9XSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZERhdGEoc3RhcnNoaXBJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnNoaXAgPSBhd2FpdCB0aGlzLnN0YXJzaGlwc1NlcnZpY2UuZ2V0U3RhcnNoaXBCeUlkKHN0YXJzaGlwSWQpO1xuICAgICAgICB0aGlzLndvcmtPcmRlcnNMaXN0ID0gYXdhaXQgdGhpcy53b3JrT3JkZXJzU2VydmljZS5nZXRXb3JrT3JkZXJQZXJTdGFyc2hpcElkKHN0YXJzaGlwSWQpO1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxufVxuIl19