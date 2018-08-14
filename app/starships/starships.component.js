"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var starhips_service_1 = require("~/shared/services/starhips.service");
var router_1 = require("nativescript-angular/router");
var StarshipsComponent = /** @class */ (function () {
    function StarshipsComponent(starshipsService, routerExtensions) {
        this.starshipsService = starshipsService;
        this.routerExtensions = routerExtensions;
        this.starhipsList = [];
        this.isLoading = false;
        // Use the component constructor to inject providers.
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.starshipsService.getAllStarships()
            .subscribe(function (data) {
            _this.starhipsList = data;
            _this.isLoading = false;
        });
    };
    StarshipsComponent.prototype.onTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        // this.routerExtensions.navigate(["/cars/car-detail", tappedCarItem.id], {
        //     animated: true,
        //     transition: {
        //         name: "slide",
        //         duration: 200,
        //         curve: "ease"
        //     }
        // });
    };
    StarshipsComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./starships.component.html",
            styleUrls: ["./starships.component.css"],
            providers: [starhips_service_1.StarshipsService]
        }),
        __metadata("design:paramtypes", [starhips_service_1.StarshipsService, router_1.RouterExtensions])
    ], StarshipsComponent);
    return StarshipsComponent;
}());
exports.StarshipsComponent = StarshipsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJzaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdUVBQXNFO0FBR3RFLHNEQUErRDtBQVMvRDtJQUlJLDRCQUFvQixnQkFBa0MsRUFBVSxnQkFBa0M7UUFBOUUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIbEcsaUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHZCxxREFBcUQ7SUFDekQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7YUFDbEMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNaLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxJQUF1QjtRQUN6QixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUUvQywyRUFBMkU7UUFDM0Usc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixRQUFRO1FBQ1IsTUFBTTtJQUNWLENBQUM7SUEzQlEsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBZ0IsQ0FBQztTQUNoQyxDQUFDO3lDQUt3QyxtQ0FBZ0IsRUFBNEIseUJBQWdCO09BSnpGLGtCQUFrQixDQTRCOUI7SUFBRCx5QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0YXJzaGlwc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvc2VydmljZXMvc3RhcmhpcHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhcnNoaXAgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWxzL3N0YXJzaGlwLm1vZGVsXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhcnNoaXBzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0YXJzaGlwcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1N0YXJzaGlwc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJzaGlwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3RhcmhpcHNMaXN0OiBBcnJheTxTdGFyc2hpcD4gPSBbXTtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhcnNoaXBzU2VydmljZTogU3RhcnNoaXBzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnNoaXBzU2VydmljZS5nZXRBbGxTdGFyc2hpcHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcmhpcHNMaXN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJzL2Nhci1kZXRhaWxcIiwgdGFwcGVkQ2FySXRlbS5pZF0sIHtcbiAgICAgICAgLy8gICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAvLyAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAvLyAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgLy8gICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAvLyAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG4iXX0=