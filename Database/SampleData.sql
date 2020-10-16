INSERT INTO users (userid, username, hashpw, firstname, lastname, country, city, phonenum, email)
VALUES (1, 'Schmucklehead','hashedpw', 'Jean-Gabriel', 'Pageau', 'Canada', 'Ottawa', '9065553457', 'jgpageau@nnhl.com');



INSERT INTO resourcetypes (resourcetypeid, resourcetypename, resourcetypedescription, resourcetypeapiurl, resourcetypeapikey)
VALUES (1, 'API Information', 'Webpage', 'https://developers.google.com/youtube/v3/getting-started', 'https://developers.google.com/youtube/v3/getting-started');

INSERT INTO groups (groupid, groupname, resourceapi, createdby)
VALUES (3,'APIs', 'youtube.com/usingAPIs', 1);

INSERT INTO linkownertypes (linkownertypeid, linkownerdescription, createdate, createdby)
VALUES (1, 'User', '4-21-2020 04:44:44+02', 1);

INSERT INTO links (linkid, linkownerid, linkownertype, createdate)
VALUES (1, 1, 1, '03-31-1989 10:23:55+02');

INSERT INTO resources (resourceid, resourcetype, creatorid)
VALUES (1, 1, 1);

INSERT INTO resourceversions (resourceversionid, resourceid, versionid, linkid, mutable, resourcename, resourcelinkurl)
VALUES (1, 1, 1, 1, 'true', 'UsingYoutubeAPI', 'https://developers.google.com/youtube/v3/getting-started');

INSERT INTO notes (noteid, resourceversionid, notename, notebody)
VALUES (1, 1, 'Question about screenshot', 'Where was this taken from?');

INSERT INTO tags (tagid, tag, createdate)
VALUES (1, 'apihelp', '09/22/2020 07:33:12+02');

INSERT INTO notetags (notetagid, noteid, tagid, createdate, createdby)
VALUES (1, 1, 1, '05/06/2020 02:33:22+02', 1);

INSERT INTO resourcetags (resourcetagid, resourceversionid, tagid, createdate, createdby)
VALUES (1, 1, 1, '06/06/2020 08:34:45+02', 1); 

INSERT INTO categories (categoryid, categoryname)
VALUES (1, 'Using APIs');

INSERT INTO groupcategories(categoryid, groupid)
VALUES (1, 1);

INSERT INTO categorytags(categoryid, tagid)
VALUES (1, 1);