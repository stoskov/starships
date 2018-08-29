import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { KinveyService } from '~/shared/services/kinvey.service';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { LoginComponent } from '~/login/login.component';
import { Kinvey } from 'kinvey-nativescript-sdk';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    public text = "Settings";
    user: Kinvey.User;

    constructor(
        private kinveyService: KinveyService,
        private modalDialogService: ModalDialogService,
        private viewContainerRef: ViewContainerRef) { }

    async ngOnInit() {
        this.user = this.kinveyService.getActiveUser();
        console.log(this.user);
    }

    async onLogout() {
        await this.kinveyService.logout();

        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: {},
            fullscreen: true,
        };

        let result = await this.modalDialogService.showModal(LoginComponent, options);

    }
}
