export class ResourseVersion {
  resourceversionid: number;
  resourceid: number;
  versionid: number;
  linkid: number;
  mutable: boolean;
  resourcename: string;
  resourcelinkurl: string;
  
  constructor(
    resourceversionid: number,
    resourceid: number,
    versionid: number,
    linkid: number,
    mutable: boolean,
    resourcename: string,
    resourcelinkurl: string) {
      
      this.resourceversionid = resourceversionid;
      this.resourceid = resourceid;
      this.versionid = versionid;
      this.linkid = linkid;
      this.mutable = mutable;
      this.resourcename = resourcename;
      this.resourcelinkurl = resourcelinkurl;
    }
}