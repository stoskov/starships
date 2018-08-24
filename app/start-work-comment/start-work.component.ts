import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Image } from "ui/image";
import * as camera from "nativescript-camera";

@Component({
    moduleId: module.id,
    templateUrl: "./start-work.component.html",
})
export class StartWorkComponent implements OnInit {
    public commentText: string = "";

    constructor(private params: ModalDialogParams) { }

    ngOnInit() {
    }

    onSave() {
        this.params.closeCallback({ save: true, comment: this.commentText });
    }

    async onTakePicture() {
        let imageAsset = await camera.takePicture();
        let image = new Image();
        image.src = imageAsset;
    }
}