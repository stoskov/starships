import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StarshipsComponent } from "./starships/starships.component";

const routes: Routes = [
    { path: "", redirectTo: "/starships", pathMatch: "full" },
    { path: "starships", component: StarshipsComponent }
];

export const Components = [StarshipsComponent];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
