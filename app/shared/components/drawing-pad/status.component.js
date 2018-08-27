"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var work_order_status_1 = require("~/shared/enums/work-order-status");
var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
        this.status = "";
        this.bgColor = "green";
        this.color = "white";
    }
    StatusComponent.prototype.ngOnInit = function () {
        if (this.status === work_order_status_1.WorkOrderStatus.New) {
            this.bgColor = "red";
        }
        else if (this.status === work_order_status_1.WorkOrderStatus.Working) {
            this.bgColor = "orange";
        }
        else {
            this.bgColor = "green";
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], StatusComponent.prototype, "status", void 0);
    StatusComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Status",
            moduleId: module.id,
            templateUrl: "./status.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXlEO0FBQ3pELHNFQUFtRTtBQU9uRTtJQU1JO1FBSkEsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVcsT0FBTyxDQUFDO1FBQzFCLFVBQUssR0FBVyxPQUFPLENBQUM7SUFFUixDQUFDO0lBRWpCLGtDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLG1DQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssbUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7SUFFTCxDQUFDO0lBZkQ7UUFEQyxZQUFLLEVBQUU7O21EQUNZO0lBRlgsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzs7T0FDVyxlQUFlLENBa0IzQjtJQUFELHNCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV29ya09yZGVyU3RhdHVzIH0gZnJvbSAnfi9zaGFyZWQvZW51bXMvd29yay1vcmRlci1zdGF0dXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTdGF0dXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhdHVzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KClcbiAgICBzdGF0dXM6IHN0cmluZyA9IFwiXCI7XG4gICAgYmdDb2xvcjogc3RyaW5nID0gXCJncmVlblwiO1xuICAgIGNvbG9yOiBzdHJpbmcgPSBcIndoaXRlXCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gV29ya09yZGVyU3RhdHVzLk5ldykge1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gV29ya09yZGVyU3RhdHVzLldvcmtpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==