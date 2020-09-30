export class ResourceType {
  resourcetypeid: number;
  resourcetypename: string;
  resourcetypedescription: string;
  resourcetypeapiurl: string;
  resourcetypeapikey: string;
  
  constructor(
    resourcetypeid: number,
    resourcetypename: string,
    resourcetypedescription: string,
    resourcetypeapiurl: string,
    resourcetypeapikey: string) {
      
      this.resourcetypeid = resourcetypeid;
      this.resourcetypename = resourcetypename;
      this.resourcetypedescription = resourcetypedescription;
      this.resourcetypeapiurl = resourcetypeapiurl;
      this.resourcetypeapikey = resourcetypeapikey;
    }
}