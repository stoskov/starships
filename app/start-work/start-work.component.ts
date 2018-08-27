import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Image } from "ui/image";
import * as camera from "nativescript-camera";

@Component({
    moduleId: module.id,
    templateUrl: "./start-work.component.html",
})
export class StartWorkComponent implements OnInit {
    public workOrder: string = "";
    @ViewChild("documentImg") documentImage: ElementRef<Image>;

    constructor(private params: ModalDialogParams) { }

    ngOnInit() {
        this.workOrder = this.params.context.workOrder;
    }

    onSave() {
    }

    async onTakePicture() {
        camera.requestPermissions();
        let imageAsset = await camera.takePicture();
        this.documentImage.nativeElement.src = imageAsset;
    }

    onSign() {

    }

    onCompleteWork() {
        this.params.closeCallback({ done: false });
    }
}