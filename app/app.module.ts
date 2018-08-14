import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule, Components } from "~/app-routing.module";
import { AppComponent } from "~/app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        ...Components
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
