export class Link{
    LinkID: number;
    linkOwnerID: number;
    linkOwnerType: number;
    createDate: string;
    constructor(
        LinkID: number,
        linkOwnerID: number,
        linkOwnerType: number,
        createDate: string){
        
        this.LinkID = LinkID;
        this.linkOwnerID = linkOwnerID;
        this.linkOwnerType = linkOwnerType;
        this.createDate = createDate;
        }
}