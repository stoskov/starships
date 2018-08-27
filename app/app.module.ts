import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule, Components } from "~/app-routing.module";
import { AppComponent } from "~/app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { AddCommentComponent } from "./add-comment/add-comment.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { StatusComponent } from '~/shared/components/status/status.component';
import { StartWorkComponent } from '~/start-work/start-work.component';
import { DrawingPadComponent } from '~/shared/components/drawing-pad/drawig-pad.component';
import { KinveyService } from '~/shared/services/kinvey.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        AddCommentComponent,
        StartWorkComponent,
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
        StartWorkComponent,
        StatusComponent,
        DrawingPadComponent,
        ...Components
    ],
    providers: [
        KinveyService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
