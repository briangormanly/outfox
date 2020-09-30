export class ResourseVersion {
  resourceVersionId: number;
  resourceId: number;
  versionId: number;
  linkId: number;
  mutable: boolean;
  resourceName: string;
  resourceLinkUrl: string;
  
  constructor(
    resourceVersionId: number,
    resourceId: number,
    versionId: number,
    linkId: number,
    mutable: boolean,
    resourceName: string,
    resourceLinkUrl: string) {
      
      this.resourceVersionId = resourceVersionId;
      this.resourceId = resourceId;
      this.versionId = versionId;
      this.linkId = linkId;
      this.mutable = mutable;
      this.resourceName = resourceName;
      this.resourceLinkUrl = resourceLinkUrl;
    }
}