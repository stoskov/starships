import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StarshipsComponent } from "./starships/starships.component";
import { WorkComponent } from "./work/work.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
    { path: "", redirectTo: "/(starships:starships//work:work//settings:settings)", pathMatch: "full" },
    { path: "starships", component: StarshipsComponent, outlet: "starships" },
    // { path: "starship-details/:id", component: StarshipDetailsComponent},
    { path: "work", component: WorkComponent, outlet: "work" },
    { path: "settings", component: SettingsComponent, outlet: "settings" }
];

export const Components = [StarshipsComponent, WorkComponent, SettingsComponent];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
