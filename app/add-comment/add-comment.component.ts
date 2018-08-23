import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
    moduleId: module.id,
    templateUrl: "./add-comment.component.html",
})
export class AddCommentComponent implements OnInit {
    public commentText: string = "";

    constructor(private params: ModalDialogParams) { }

    ngOnInit() {
    }

    onSave() {
        this.params.closeCallback({ save: true, comment: this.commentText });
    }

    onCancel() {
        this.params.closeCallback({ save: false });
    }
}