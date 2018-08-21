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
    { path: "starships", component: starship_details_component_1.StarshipDetailsComponent, outlet: "starships" },
    // { path: "starship-details/:id", component: StarshipDetailsComponent, outlet: "starships"},
    { path: "work-order-details/:id", component: work_order_details_component_1.WorkOrderDetailsComponent, outlet: "starships" },
    { path: "work", component: work_component_1.WorkComponent, outlet: "work" },
    { path: "settings", component: settings_component_1.SettingsComponent, outlet: "settings" }
];
exports.Components = [starships_component_1.StarshipsComponent, starship_details_component_1.StarshipDetailsComponent, work_component_1.WorkComponent, work_order_details_component_1.WorkOrderDetailsComponent, settings_component_1.SettingsComponent];
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
