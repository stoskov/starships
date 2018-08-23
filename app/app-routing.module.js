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
    // { path: "starships", component: StarshipsComponent, outlet: "starships" },
    { path: "starships", component: work_order_details_component_1.WorkOrderDetailsComponent, outlet: "starships" },
    // { path: "starship-details/:id", component: StarshipDetailsComponent, outlet: "starships" },
    // { path: "work-order-details/:id", component: WorkOrderDetailsComponent, outlet: "starships" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUsdUVBQXFFO0FBQ3JFLDRGQUF5RjtBQUN6Rix3REFBc0Q7QUFDdEQsb0VBQWtFO0FBQ2xFLGtHQUE4RjtBQUU5RixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHNEQUFzRCxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDbkcsNkVBQTZFO0lBQzdFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0RBQXlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtJQUNoRiw4RkFBOEY7SUFDOUYsaUdBQWlHO0lBQ2pHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtDQUN6RSxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUc7SUFDdEIsd0NBQWtCO0lBQ2xCLHFEQUF3QjtJQUN4Qiw4QkFBYTtJQUNiLHdEQUF5QjtJQUN6QixzQ0FBaUI7Q0FBQyxDQUFDO0FBTXZCO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU3RhcnNoaXBzQ29tcG9uZW50IH0gZnJvbSBcIn4vc3RhcnNoaXBzL3N0YXJzaGlwcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0YXJzaGlwRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCJ+L3N0YXJzaGlwLWRldGFpbHMvc3RhcnNoaXAtZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdvcmtDb21wb25lbnQgfSBmcm9tIFwifi93b3JrL3dvcmsuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gXCJ+L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV29ya09yZGVyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL3dvcmstb3JkZXItZGV0YWlscy93b3JrLW9yZGVyLWRldGFpbHMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvKHN0YXJzaGlwczpzdGFyc2hpcHMvL3dvcms6d29yay8vc2V0dGluZ3M6c2V0dGluZ3MpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICAvLyB7IHBhdGg6IFwic3RhcnNoaXBzXCIsIGNvbXBvbmVudDogU3RhcnNoaXBzQ29tcG9uZW50LCBvdXRsZXQ6IFwic3RhcnNoaXBzXCIgfSxcbiAgICB7IHBhdGg6IFwic3RhcnNoaXBzXCIsIGNvbXBvbmVudDogV29ya09yZGVyRGV0YWlsc0NvbXBvbmVudCwgb3V0bGV0OiBcInN0YXJzaGlwc1wiIH0sXG4gICAgLy8geyBwYXRoOiBcInN0YXJzaGlwLWRldGFpbHMvOmlkXCIsIGNvbXBvbmVudDogU3RhcnNoaXBEZXRhaWxzQ29tcG9uZW50LCBvdXRsZXQ6IFwic3RhcnNoaXBzXCIgfSxcbiAgICAvLyB7IHBhdGg6IFwid29yay1vcmRlci1kZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IFdvcmtPcmRlckRldGFpbHNDb21wb25lbnQsIG91dGxldDogXCJzdGFyc2hpcHNcIiB9LFxuICAgIHsgcGF0aDogXCJ3b3JrXCIsIGNvbXBvbmVudDogV29ya0NvbXBvbmVudCwgb3V0bGV0OiBcIndvcmtcIiB9LFxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50LCBvdXRsZXQ6IFwic2V0dGluZ3NcIiB9XG5dO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcbiAgICBTdGFyc2hpcHNDb21wb25lbnQsXG4gICAgU3RhcnNoaXBEZXRhaWxzQ29tcG9uZW50LFxuICAgIFdvcmtDb21wb25lbnQsXG4gICAgV29ya09yZGVyRGV0YWlsc0NvbXBvbmVudCxcbiAgICBTZXR0aW5nc0NvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=