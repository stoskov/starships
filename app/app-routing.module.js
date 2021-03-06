"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var starships_component_1 = require("~/starships/starships.component");
var starship_details_component_1 = require("~/starship-details/starship-details.component");
var work_component_1 = require("~/work/work.component");
var settings_component_1 = require("~/settings/settings.component");
var work_order_details_component_1 = require("./work-order-details/work-order-details.component");
var routes = [
    { path: "", redirectTo: "/(starships:starships//work:work//settings:settings)", pathMatch: "full" },
    { path: "starships", component: starships_component_1.StarshipsComponent, outlet: "starships" },
    // { path: "starships", component: WorkOrderDetailsComponent, outlet: "starships" },
    { path: "starship-details/:id", component: starship_details_component_1.StarshipDetailsComponent, outlet: "starships" },
    { path: "work-order-details/:id", component: work_order_details_component_1.WorkOrderDetailsComponent, outlet: "starships" },
    { path: "work-order-details/:id", component: work_order_details_component_1.WorkOrderDetailsComponent, outlet: "work" },
    { path: "work", component: work_component_1.WorkComponent, outlet: "work" },
    { path: "settings", component: settings_component_1.SettingsComponent, outlet: "settings" }
];
exports.Components = [
    starships_component_1.StarshipsComponent,
    starship_details_component_1.StarshipDetailsComponent,
    work_component_1.WorkComponent,
    work_order_details_component_1.WorkOrderDetailsComponent,
    settings_component_1.SettingsComponent
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUsdUVBQXFFO0FBQ3JFLDRGQUF5RjtBQUN6Rix3REFBc0Q7QUFDdEQsb0VBQWtFO0FBQ2xFLGtHQUE4RjtBQUU5RixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHNEQUFzRCxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDbkcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO0lBQ3pFLG9GQUFvRjtJQUNwRixFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtJQUMxRixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsd0RBQXlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtJQUM3RixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsd0RBQXlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUN4RixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7Q0FDekUsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLHdDQUFrQjtJQUNsQixxREFBd0I7SUFDeEIsOEJBQWE7SUFDYix3REFBeUI7SUFDekIsc0NBQWlCO0NBQUMsQ0FBQztBQU12QjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFN0YXJzaGlwc0NvbXBvbmVudCB9IGZyb20gXCJ+L3N0YXJzaGlwcy9zdGFyc2hpcHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdGFyc2hpcERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwifi9zdGFyc2hpcC1kZXRhaWxzL3N0YXJzaGlwLWRldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXb3JrQ29tcG9uZW50IH0gZnJvbSBcIn4vd29yay93b3JrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tIFwifi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdvcmtPcmRlckRldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi93b3JrLW9yZGVyLWRldGFpbHMvd29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiLyhzdGFyc2hpcHM6c3RhcnNoaXBzLy93b3JrOndvcmsvL3NldHRpbmdzOnNldHRpbmdzKVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInN0YXJzaGlwc1wiLCBjb21wb25lbnQ6IFN0YXJzaGlwc0NvbXBvbmVudCwgb3V0bGV0OiBcInN0YXJzaGlwc1wiIH0sXG4gICAgLy8geyBwYXRoOiBcInN0YXJzaGlwc1wiLCBjb21wb25lbnQ6IFdvcmtPcmRlckRldGFpbHNDb21wb25lbnQsIG91dGxldDogXCJzdGFyc2hpcHNcIiB9LFxuICAgIHsgcGF0aDogXCJzdGFyc2hpcC1kZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IFN0YXJzaGlwRGV0YWlsc0NvbXBvbmVudCwgb3V0bGV0OiBcInN0YXJzaGlwc1wiIH0sXG4gICAgeyBwYXRoOiBcIndvcmstb3JkZXItZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBXb3JrT3JkZXJEZXRhaWxzQ29tcG9uZW50LCBvdXRsZXQ6IFwic3RhcnNoaXBzXCIgfSxcbiAgICB7IHBhdGg6IFwid29yay1vcmRlci1kZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IFdvcmtPcmRlckRldGFpbHNDb21wb25lbnQsIG91dGxldDogXCJ3b3JrXCIgfSxcbiAgICB7IHBhdGg6IFwid29ya1wiLCBjb21wb25lbnQ6IFdvcmtDb21wb25lbnQsIG91dGxldDogXCJ3b3JrXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCwgb3V0bGV0OiBcInNldHRpbmdzXCIgfVxuXTtcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG4gICAgU3RhcnNoaXBzQ29tcG9uZW50LFxuICAgIFN0YXJzaGlwRGV0YWlsc0NvbXBvbmVudCxcbiAgICBXb3JrQ29tcG9uZW50LFxuICAgIFdvcmtPcmRlckRldGFpbHNDb21wb25lbnQsXG4gICAgU2V0dGluZ3NDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19