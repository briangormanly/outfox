export class Group{
    groupID: number;
    resourceType: string;
    resourceAPI: string;
    dateTimeAdd: string;
    dateTimeRemove: string;
    constructor(
        groupID: number,
        resourceType: string,
        resourceAPI: string,
        dateTimeAdd: string,
        dateTimeRemove: string){    

        this.groupID = groupID;
        this.resourceType = resourceType;
        this.resourceAPI = resourceAPI;
        this.dateTimeAdd = dateTimeAdd;
        this.dateTimeRemove = dateTimeRemove;
    }
}