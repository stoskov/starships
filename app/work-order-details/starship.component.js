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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnNoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVFQUFzRTtBQUd0RSxzREFBK0Q7QUFTL0Q7SUFJSSw0QkFBb0IsZ0JBQWtDLEVBQVUsZ0JBQWtDO1FBQTlFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSGxHLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2QscURBQXFEO0lBQ3pELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFO2FBQ2xDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDWixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sSUFBdUI7UUFDekIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsMkVBQTJFO1FBQzNFLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBM0JRLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsbUNBQWdCLENBQUM7U0FDaEMsQ0FBQzt5Q0FLd0MsbUNBQWdCLEVBQTRCLHlCQUFnQjtPQUp6RixrQkFBa0IsQ0E0QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGFyc2hpcHNTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3N0YXJoaXBzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN0YXJzaGlwIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy9zdGFyc2hpcC5tb2RlbFwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXJzaGlwcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zdGFyc2hpcHMuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtTdGFyc2hpcHNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyc2hpcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXJoaXBzTGlzdDogQXJyYXk8U3RhcnNoaXA+ID0gW107XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXJzaGlwc1NlcnZpY2U6IFN0YXJzaGlwc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXJzaGlwc1NlcnZpY2UuZ2V0QWxsU3RhcnNoaXBzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJoaXBzTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YXBwZWRDYXJJdGVtID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuXG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2Fycy9jYXItZGV0YWlsXCIsIHRhcHBlZENhckl0ZW0uaWRdLCB7XG4gICAgICAgIC8vICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgLy8gICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgIC8vICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgLy8gICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuIl19