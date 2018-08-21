import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StarshipsComponent } from "~/starships/starships.component";
import { StarshipDetailsComponent } from "~/starship-details/starship-details.component";
import { WorkComponent } from "~/work/work.component";
import { SettingsComponent } from "~/settings/settings.component";
import { WorkOrderDetailsComponent } from "./work-order-details/work-order-details.component";

const routes: Routes = [
    { path: "", redirectTo: "/(starships:starships//work:work//settings:settings)", pathMatch: "full" },
    // { path: "starships", component: StarshipsComponent, outlet: "starships" },
    { path: "starships", component: StarshipDetailsComponent, outlet: "starships" },
    // { path: "starship-details/:id", component: StarshipDetailsComponent, outlet: "starships"},
    { path: "work-order-details/:id", component: WorkOrderDetailsComponent, outlet: "starships" },
    { path: "work", component: WorkComponent, outlet: "work" },
    { path: "settings", component: SettingsComponent, outlet: "settings" }
];

export const Components = [StarshipsComponent, StarshipDetailsComponent, WorkComponent, WorkOrderDetailsComponent, SettingsComponent];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
