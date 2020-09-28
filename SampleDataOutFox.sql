


INSERT INTO user_t (userid, username, firstname, lastname, country, city, phonenum, email)
VALUES ('1', 'Schmucklehead', 'Jean-Gabriel', 'Pageau', 'Canada', 'Ottawa', '9065553457', 'jgpageau@nnhl.com');

INSERT INTO group_t (groupid, resourcetype, resourceapi, datetimeadd, datetimermv)
VALUES ('44', '4' 'youtube.com/usingAPIs', '07-08-1999','12-25-2000');

INSERT INTO link_t (linkid, linkownerid, linkownedtype, createddate)
VALUES ('33', '1', '5', '03-31-1989');

INSERT INTO linkownedtype_t (linkownerid, linkownerdescription, createddate, createby)
VALUES ('25', 'professor', '4-21-2020', 'Schmucklehead');

INSERT INTO resourceversion_t (resourceversionid, resourceid, versionid, linkid, mutable, resourcename, resourcelinkurl)
VALUES ('11', '34', '2.4', '33', 'true', 'UsingAPIs', '');

INSERT INTO resource_t (resourceid, resourcetype, creatorid)
VALUES ('4', '.mp4', '1');

INSERT INTO resourcetype_t (resourcetypeid, resourcetypename, resourcetypedescription, resourcetypeapiurl, resourcetypeapikey)
VALUES ('4', 'video', 'youtube video');

INSERT INTO note_t (noteid, resourceversionsid, notename, notebody)
VALUES ('1', '2', 'Question about screenshot', 'Where was this taken from?');

INSERT INTO notetag_t (notetagid, noteid, tagid, createddate, createdby)
VALUES ('7', '3', '10', '05/06/2020', '1');

INSERT INTO tag_t (tagid, tag, createddate)
VALUES ('12', 'recursion', '09/22/2020');

INSERT INTO resourcetag_t (resourcetagid, resourceversionid, tagid, creatorid, createdby)
VALUES ('20', '3', '9', '06/06/2020', '15');

-- Need definitions of the following tables:
-- note_t: is the note the same as a comment?
-- notetag_t: what is the purpose of this tables
-- tag_t: this is just category of the resource?
-- resourcetag_t: what is the different between tag and resourcetag?

-- group into collection
-- note into comment
-- resourcetypedescription redundant
-- resource type table attributes rename
