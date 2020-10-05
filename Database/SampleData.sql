INSERT INTO Users (username, hashpw, firstname, lastname, country, city, phonenum, email)
VALUES ('Schmucklehead','joe', 'Jean-Gabriel', 'Pageau', 'Canada', 'Ottawa', '9065553457', 'jgpageau@nnhl.com');

INSERT INTO ResourceTypes (resourcetypeid, resourcetypename, resourcetypedescription, resourcetypeapiurl, resourcetypeapikey)
VALUES (1, 'API Information', 'Webpage', 'https://developers.google.com/youtube/v3/getting-started', 'https://developers.google.com/youtube/v3/getting-started');

INSERT INTO Groups (groupid, groupname, resourceapi, datetimeadd, datetimeremove, createdby)
VALUES (1,'APIs', 'youtube.com/usingAPIs', '2004-10-19 10:23:54+02', NULL, 1);

INSERT INTO LinkOwnerTypes (linkownertypeid, linkownerdescription, createdate, createdby)
VALUES (1, 'User', '4-21-2020 04:44:44+02', 1);

INSERT INTO Links (linkid, linkownerid, linkownertype, createdate)
VALUES (1, 1, 1, '03-31-1989 10:23:55+02');

INSERT INTO Resources (resourceid, resourcetype, creatorid)
VALUES (1, 1, 1);

INSERT INTO ResourceVersions (resourceversionid, resourceid, versionid, linkid, mutable, resourcename, resourcelinkurl)
VALUES (1, 1, 1, 1, 'true', 'UsingYoutubeAPI', 'https://developers.google.com/youtube/v3/getting-started');

INSERT INTO Notes (noteid, resourceversionid, notename, notebody)
VALUES (1, 1, 'Question about screenshot', 'Where was this taken from?');

INSERT INTO Tags (tagid, tag, createdate)
VALUES (1, 'apihelp', '09/22/2020 07:33:12+02');

INSERT INTO NoteTags (notetagid, noteid, tagid, createdate, createdby)
VALUES (1, 1, 1, '05/06/2020 02:33:22+02', 1);

INSERT INTO ResourceTags (resourcetagid, resourceversionid, tagid, createdate, createdby)
VALUES (1, 1, 1, '06/06/2020 08:34:45+02', 1); 

INSERT INTO Categories (categoryid, categoryname)
VALUES (1, 'Using APIs');

INSERT INTO GroupCategories(categoryid, groupid)
VALUES (1, 1);

INSERT INTO CategoryTags(categoryid, tagid)
VALUES (1, 1);