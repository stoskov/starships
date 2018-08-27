import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { StarshipsService } from "~/shared/services/starships.service";
import { WorkOrdersService } from "~/shared/services/workorders.service";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { WorkOrder } from "~/shared/models/work-order.model";
import { KinveyService } from "~/shared/services/kinvey.service";
import { confirm } from "ui/dialogs";
import { WorkOrderComment } from '~/shared/models/work-order-comment.model';
import { CommentsService } from '~/shared/services/comments.service';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { AddCommentComponent } from '~/add-comment/add-comment.component';
import { StartWorkComponent } from '~/start-work/start-work.component';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./work-order-details.component.html",
    styleUrls: ["./work-order-details.component.css"],
    providers: [StarshipsService, WorkOrdersService, KinveyService, CommentsService, ModalDialogService]
})
export class WorkOrderDetailsComponent implements OnInit {
    starship: Object = {};
    isLoading = true;
    id: string;
    workOrder: WorkOrder;
    commentsList: Array<WorkOrderComment> = [];

    constructor(
        private workOrdersService: WorkOrdersService,
        private workOrderCommentsService: CommentsService,
        private modalDialogService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private pageRoute: PageRoute) { }

    ngOnInit(): void {
        this.pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                // this.id = "500C000001H39DMIAZ";
                this.id = params.id;                
                return this.loadData(this.id);
            });
    }

    async onStartWork() {
        let options = {
            title: "Confirm Start",
            message: "Are you sure you want to begin work on this work order?",
            okButtonText: "Start",
            cancelButtonText: "Cancel",
        };

        let confirmResult = await confirm(options);

        if (!confirmResult) {
            return;
        }

        const workDetailsOptions: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: {
                workOrder: this.workOrder
            },
            fullscreen: true,
        };

        this.isLoading = true;
        await this.workOrdersService.startWork(this.id);
        this.isLoading = false;

        await this.modalDialogService.showModal(StartWorkComponent, workDetailsOptions);

        this.isLoading = true;
        await this.workOrdersService.completeWork(this.id);
        await this.loadData(this.id);
    }

    async addComment() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: {},
            fullscreen: true,
        };

        let result = await this.modalDialogService.showModal(AddCommentComponent, options);

        if (result.save) {
            this.isLoading = true;

            this.workOrderCommentsService.addComment(this.id, result.comment);
            await this.loadData(this.id);
        }
    }

    private async loadData(workOrderId: string) {
        this.isLoading = true;

        this.workOrder = await this.workOrdersService.getWorkOrderById(workOrderId);
        this.commentsList = await this.workOrderCommentsService.getCommentsByOrderId(workOrderId);

        this.isLoading = false;
    }
}
