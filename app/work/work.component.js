"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var workorders_service_1 = require("~/shared/services/workorders.service");
var WorkComponent = /** @class */ (function () {
    function WorkComponent(workOrdersService, routerExtensions, router) {
        this.workOrdersService = workOrdersService;
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.workOrdersList = [];
        this.isLoading = true;
    }
    WorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workOrdersService.getAllWorkOrders()
            .then(function (data) {
            _this.workOrdersList = data;
            _this.isLoading = false;
        });
    };
    WorkComponent.prototype.onTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this.routerExtensions.navigate([{ outlets: { work: ["work-order-details", tappedCarItem.id] } }], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    WorkComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./work.component.html",
            providers: [workorders_service_1.WorkOrdersService]
        }),
        tslib_1.__metadata("design:paramtypes", [workorders_service_1.WorkOrdersService,
            router_1.RouterExtensions,
            router_2.Router])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFFbEQsc0RBQStEO0FBQy9ELDBDQUF5QztBQUV6QywyRUFBeUU7QUFRekU7SUFJSSx1QkFDWSxpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLE1BQWM7UUFGZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU4xQixtQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksQ0FBQztJQUthLENBQUM7SUFFL0IsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFO2FBQ3BDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sSUFBdUI7UUFDekIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzlGLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUNqQyxDQUFDO2lEQU1pQyxzQ0FBaUI7WUFDbEIseUJBQWdCO1lBQzFCLGVBQU07T0FQakIsYUFBYSxDQTZCekI7SUFBRCxvQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgV29ya09yZGVyIH0gZnJvbSAnfi9zaGFyZWQvbW9kZWxzL3dvcmstb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgV29ya09yZGVyc1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy93b3Jrb3JkZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dvcmsuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtXb3JrT3JkZXJzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgV29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgd29ya09yZGVyc0xpc3Q6IEFycmF5PFdvcmtPcmRlcj4gPSBbXTtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgd29ya09yZGVyc1NlcnZpY2U6IFdvcmtPcmRlcnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud29ya09yZGVyc1NlcnZpY2UuZ2V0QWxsV29ya09yZGVycygpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud29ya09yZGVyc0xpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YXBwZWRDYXJJdGVtID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHdvcms6IFtcIndvcmstb3JkZXItZGV0YWlsc1wiLCB0YXBwZWRDYXJJdGVtLmlkXSB9IH1dLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19