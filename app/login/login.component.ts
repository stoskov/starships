import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { KinveyService } from '~/shared/services/kinvey.service';

@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    public username: string = "admin";
    public password: string = "admin";
    public isLoading: Boolean = false;

    constructor(private params: ModalDialogParams, private kinveyService: KinveyService) { }

    ngOnInit() {
    }

    async onLogin() {
        this.isLoading = true;
        await this.kinveyService.login(this.username, this.password);
        this.isLoading = false;
        this.params.closeCallback();
    }
}