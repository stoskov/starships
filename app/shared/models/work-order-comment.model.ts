export class WorkOrderComment {
    id: string;
    parentId: string;
    commentBody: string;
    createdDate: string;

    constructor(caseCommentData) {
        this.id = caseCommentData.Id;
        this.parentId = caseCommentData.ParentId;
        this.commentBody = caseCommentData.CommentBody;
        this.createdDate = caseCommentData.SystemModstamp;
    }
}