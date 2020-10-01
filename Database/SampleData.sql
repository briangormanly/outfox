INSERT INTO user_t (userid, username, firstname, lastname, country, city, phonenum, email)
VALUES (1, 'Schmucklehead', 'Jean-Gabriel', 'Pageau', 'Canada', 'Ottawa', '9065553457', 'jgpageau@nnhl.com');

INSERT INTO resourcetype_t (resourcetypeid, resourcetypename, resourcetypedescription, resourcetypeapiurl, resourcetypeapikey)
VALUES (1, 'API Information', 'Webpage', 'https://developers.google.com/youtube/v3/getting-started', 'https://developers.google.com/youtube/v3/getting-started');

INSERT INTO group_t (groupid, groupname, resourcetype, resourceapi, datetimeadd, datetimeremove)
VALUES (1,'APIs', 1, 'youtube.com/usingAPIs', '2004-10-19 10:23:54+02', NULL);

INSERT INTO linkownertype_t (linkownertypeid, linkownerdescription, createdate, createdby)
VALUES (1, 'User', '4-21-2020 04:44:44+02', 1);

INSERT INTO link_t (linkid, linkownerid, linkownertype, createdate)
VALUES (1, 1, 1, '03-31-1989 10:23:55+02');

INSERT INTO resource_t (resourceid, resourcetype, creatorid)
VALUES (1, 1, 1);

INSERT INTO resourceversion_t (resourceversionid, resourceid, versionid, linkid, mutable, resourcename, resourcelinkurl)
VALUES (1, 1, 1, 1, 'true', 'UsingYoutubeAPI', 'https://developers.google.com/youtube/v3/getting-started');

INSERT INTO note_t (noteid, resourceversionid, notename, notebody)
VALUES (1, 1, 'Question about screenshot', 'Where was this taken from?');

INSERT INTO tag_t (tagid, tag, createdate)
VALUES (1, 'apihelp', '09/22/2020 07:33:12+02');

INSERT INTO notetag_t (notetagid, noteid, tagid, createdate, createdby)
VALUES (1, 1, 1, '05/06/2020 02:33:22+02', 1);

INSERT INTO resourcetag_t (resourcetagid, resourceversionid, tagid, createdate, createdby)
VALUES (1, 1, 1, '06/06/2020 08:34:45+02', 1); 

INSERT INTO category_t (categoryid, categoryname)
VALUES (1, 'Using APIs');

INSERT INTO groupcategory_t(groupcategoryid, categoryid, groupid)
VALUES (1, 1, 1);

INSERT INTO categorytag_t(categorytagid, categoryid, tagid)
VALUES (1, 1, 1);