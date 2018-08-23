import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule, Components } from "~/app-routing.module";
import { AppComponent } from "~/app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { AddCommentComponent } from "./add-comment/add-comment.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        AddCommentComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        AddCommentComponent,
        ...Components
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
