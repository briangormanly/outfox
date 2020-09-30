export class Resource {
  resourceID: number;
  resourceType: number;
  creatorID: number;
  
  constructor(
    resourceID: number,
    resourceType: number,
    creatorID: number) {
      
      this.resourceID = resourceID;
      this.resourceType = resourceType;
      this.creatorID = creatorID;
    }
}