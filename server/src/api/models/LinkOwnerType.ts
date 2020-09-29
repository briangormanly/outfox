export class LinkOwnerType{
    linkOwnerTypeID: number;
    linkOwner: number;
    linkOwnerDescription: string;
    createDate: string;
    constructor(
        linkOwnerTypeID: number,
        linkOwner: number,
        linkOwnerDescription: string,
        createDate: string){

        this.linkOwnerTypeID = linkOwnerTypeID;
        this.linkOwner = linkOwner;
        this.linkOwnerDescription = linkOwnerDescription;
        this.createDate = createDate;
    }
}