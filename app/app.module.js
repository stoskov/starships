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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSwyREFBb0U7QUFDcEUsaURBQStDO0FBQy9DLGtEQUFtRTtBQUNuRSw0RkFBb0c7QUFDcEcsNkVBQTBFO0FBQzFFLG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFDOUUsMEVBQXVFO0FBNEJ2RTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBMUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLHlDQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsNkJBQXNCO2dCQUN0QixrREFBNEI7Z0JBQzVCLCtCQUF1QjthQUMxQjtZQUNELFlBQVk7Z0JBQ1IsNEJBQVk7Z0JBQ1osMkNBQW1CO2dCQUNuQix5Q0FBa0I7Z0JBQ2xCLGtDQUFlO3FCQUNaLCtCQUFVLENBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgQ29tcG9uZW50cyB9IGZyb20gXCJ+L2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyL2xpc3R2aWV3LWRpcmVjdGl2ZXNcIjtcbmltcG9ydCB7IEFkZENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQtY29tbWVudC9hZGQtY29tbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdGF0dXNDb21wb25lbnQgfSBmcm9tICd+L3NoYXJlZC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXJ0V29ya0NvbXBvbmVudCB9IGZyb20gJ34vc3RhcnQtd29yay9zdGFydC13b3JrLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEFkZENvbW1lbnRDb21wb25lbnQsXG4gICAgICAgIFN0YXJ0V29ya0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tbWVudENvbXBvbmVudCxcbiAgICAgICAgU3RhcnRXb3JrQ29tcG9uZW50LFxuICAgICAgICBTdGF0dXNDb21wb25lbnQsXG4gICAgICAgIC4uLkNvbXBvbmVudHNcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19