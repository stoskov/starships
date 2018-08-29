import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { KinveyService } from '~/shared/services/kinvey.service';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { LoginComponent } from '~/login/login.component';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor(
        private kinveyService: KinveyService,
        private viewContainerRef: ViewContainerRef,
        private modalDialogService: ModalDialogService) { }

    async ngOnInit() {
        if (this.kinveyService.isAuthenticated()) {
            return;
        }

        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: {},
            fullscreen: true,
        };

        let result = await this.modalDialogService.showModal(LoginComponent, options);
    }
}
