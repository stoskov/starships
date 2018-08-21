"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("~/app-routing.module");
var app_component_1 = require("~/app.component");
var http_1 = require("nativescript-angular/http");
var listview_directives_1 = require("nativescript-ui-listview/angular/listview-directives");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                listview_directives_1.NativeScriptUIListViewModule
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_module_1.Components),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
