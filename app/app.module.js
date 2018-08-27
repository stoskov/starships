"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("~/app-routing.module");
var app_component_1 = require("~/app.component");
var http_1 = require("nativescript-angular/http");
var listview_directives_1 = require("nativescript-ui-listview/angular/listview-directives");
var add_comment_component_1 = require("./add-comment/add-comment.component");
var forms_1 = require("nativescript-angular/forms");
var status_component_1 = require("~/shared/components/status/status.component");
var start_work_component_1 = require("~/start-work/start-work.component");
var drawig_pad_component_1 = require("~/shared/components/drawing-pad/drawig-pad.component");
var kinvey_service_1 = require("~/shared/services/kinvey.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            entryComponents: [
                add_comment_component_1.AddCommentComponent,
                start_work_component_1.StartWorkComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                listview_directives_1.NativeScriptUIListViewModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                add_comment_component_1.AddCommentComponent,
                start_work_component_1.StartWorkComponent,
                status_component_1.StatusComponent,
                drawig_pad_component_1.DrawingPadComponent
            ].concat(app_routing_module_1.Components),
            providers: [
                kinvey_service_1.KinveyService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSwyREFBb0U7QUFDcEUsaURBQStDO0FBQy9DLGtEQUFtRTtBQUNuRSw0RkFBb0c7QUFDcEcsNkVBQTBFO0FBQzFFLG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFDOUUsMEVBQXVFO0FBQ3ZFLDZGQUEyRjtBQUMzRixtRUFBaUU7QUFnQ2pFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE5QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLDJDQUFtQjtnQkFDbkIseUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiw2QkFBc0I7Z0JBQ3RCLGtEQUE0QjtnQkFDNUIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWTtnQkFDUiw0QkFBWTtnQkFDWiwyQ0FBbUI7Z0JBQ25CLHlDQUFrQjtnQkFDbEIsa0NBQWU7Z0JBQ2YsMENBQW1CO3FCQUNoQiwrQkFBVSxDQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUsIENvbXBvbmVudHMgfSBmcm9tIFwifi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhci9saXN0dmlldy1kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBBZGRDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnfi9zaGFyZWQvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFydFdvcmtDb21wb25lbnQgfSBmcm9tICd+L3N0YXJ0LXdvcmsvc3RhcnQtd29yay5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhd2luZ1BhZENvbXBvbmVudCB9IGZyb20gJ34vc2hhcmVkL2NvbXBvbmVudHMvZHJhd2luZy1wYWQvZHJhd2lnLXBhZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgS2ludmV5U2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL2tpbnZleS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgQWRkQ29tbWVudENvbXBvbmVudCxcbiAgICAgICAgU3RhcnRXb3JrQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBBZGRDb21tZW50Q29tcG9uZW50LFxuICAgICAgICBTdGFydFdvcmtDb21wb25lbnQsXG4gICAgICAgIFN0YXR1c0NvbXBvbmVudCxcbiAgICAgICAgRHJhd2luZ1BhZENvbXBvbmVudCxcbiAgICAgICAgLi4uQ29tcG9uZW50c1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEtpbnZleVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19