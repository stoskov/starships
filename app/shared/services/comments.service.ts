import { Injectable } from "@angular/core";
import { KinveyService } from "~/shared/services/kinvey.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { WorkOrderComment } from "~/shared/models/work-order-comment.model";

@Injectable()
export class CommentsService {
    private caseCommentsStore = Kinvey.DataStore.collection("caseComment", Kinvey.DataStoreType.Network);

    constructor(private kinveyService: KinveyService) { }


    async getCommentsByOrderId(orderdId: string) {
        await this.kinveyService.login()

        const query = new Kinvey.Query();
        query.equalTo("ParentId", orderdId);

        let commentsList = await this.caseCommentsStore.find(query).toPromise();

        return commentsList.map((comment) => {
            return new WorkOrderComment(comment);
        })
    }

    async addComment(orderId: string, comment: string) {
        return await this.caseCommentsStore.save({
            ParentId: orderId,
            CommentBody: comment
        });
    }
}