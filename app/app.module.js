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
var start_work_component_1 = require("~/start-work-comment/start-work.component");
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
                status_component_1.StatusComponent
            ].concat(app_routing_module_1.Components),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSwyREFBb0U7QUFDcEUsaURBQStDO0FBQy9DLGtEQUFtRTtBQUNuRSw0RkFBb0c7QUFDcEcsNkVBQTBFO0FBQzFFLG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFDOUUsa0ZBQStFO0FBMkIvRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBekJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsa0RBQTRCO2dCQUM1QiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZO2dCQUNSLDRCQUFZO2dCQUNaLDJDQUFtQjtnQkFDbkIseUNBQWtCO2dCQUNsQixrQ0FBZTtxQkFDWiwrQkFBVSxDQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUsIENvbXBvbmVudHMgfSBmcm9tIFwifi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhci9saXN0dmlldy1kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBBZGRDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnfi9zaGFyZWQvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFydFdvcmtDb21wb25lbnQgfSBmcm9tICd+L3N0YXJ0LXdvcmstY29tbWVudC9zdGFydC13b3JrLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEFkZENvbW1lbnRDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEFkZENvbW1lbnRDb21wb25lbnQsXG4gICAgICAgIFN0YXJ0V29ya0NvbXBvbmVudCxcbiAgICAgICAgU3RhdHVzQ29tcG9uZW50LFxuICAgICAgICAuLi5Db21wb25lbnRzXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==