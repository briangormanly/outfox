INSERT INTO users (userid, username, hashpw, firstname, lastname, country, city, phonenum, email)
VALUES (1, 'Schmucklehead','hashedpw', 'Jean-Gabriel', 'Pageau', 'Canada', 'Ottawa', '9065553457', 'jgpageau@nnhl.com');

INSERT INTO groups (groupid, groupname, resourceapi, createdby)
VALUES (3,'APIs', 'youtube.com/usingAPIs', 1);

INSERT INTO resources (id, type, title, description, linkurl, mutable, creatorid)
VALUES (1, 'Link', 'API Documentation', 'Documentation for the YouTube API','https://developers.google.com/youtube/v3', false,  1);

INSERT INTO notes (noteid, resourceid, notename, notebody)
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

INSERT INTO groupresource(groupid, resourceid)
VALUES (1, 1);