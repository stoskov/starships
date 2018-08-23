"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var starships_service_1 = require("~/shared/services/starships.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var StarshipsComponent = /** @class */ (function () {
    function StarshipsComponent(starshipsService, routerExtensions, router) {
        this.starshipsService = starshipsService;
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.starhipsList = [];
        this.isLoading = true;
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.starshipsService.getAllStarships()
            .then(function (data) {
            _this.starhipsList = data;
            _this.isLoading = false;
        });
    };
    StarshipsComponent.prototype.onTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this.routerExtensions.navigate([{ outlets: { starships: ["starship-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    StarshipsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./starships.component.html",
            styleUrls: ["./starships.component.css"],
            providers: [starships_service_1.StarshipsService]
        }),
        tslib_1.__metadata("design:paramtypes", [starships_service_1.StarshipsService, router_1.RouterExtensions, router_2.Router])
    ], StarshipsComponent);
    return StarshipsComponent;
}());
exports.StarshipsComponent = StarshipsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJzaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELHlFQUF1RTtBQUd2RSxzREFBK0Q7QUFDL0QsMENBQXlDO0FBU3pDO0lBSUksNEJBQW9CLGdCQUFrQyxFQUFVLGdCQUFrQyxFQUFVLE1BQWM7UUFBdEcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDFILGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRTZHLENBQUM7SUFFL0gscUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRTthQUNsQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLElBQXVCO1FBQ3pCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRS9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNqRyxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsTUFBTTthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6QlEsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNoQyxDQUFDO2lEQUt3QyxvQ0FBZ0IsRUFBNEIseUJBQWdCLEVBQWtCLGVBQU07T0FKakgsa0JBQWtCLENBMEI5QjtJQUFELHlCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXBzU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9zdGFyc2hpcHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhcnNoaXBzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0YXJzaGlwcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1N0YXJzaGlwc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJzaGlwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3RhcmhpcHNMaXN0OiBBcnJheTxTdGFyc2hpcD4gPSBbXTtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGFyc2hpcHNTZXJ2aWNlOiBTdGFyc2hpcHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnNoaXBzU2VydmljZS5nZXRBbGxTdGFyc2hpcHMoKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJoaXBzTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgc3RhcnNoaXBzOiBbXCJzdGFyc2hpcC1kZXRhaWxzXCIsIHRhcHBlZENhckl0ZW0uaWRdIH0gfV0sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=