DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS linkownertypes CASCADE;
DROP TABLE IF EXISTS links CASCADE;
DROP TABLE IF EXISTS resourceversions CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS resourcetypes CASCADE;
DROP TABLE IF EXISTS notes CASCADE;
DROP TABLE IF EXISTS notetags CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS resourcetags CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS groupcategories CASCADE;
DROP TABLE IF EXISTS categorytags CASCADE;

CREATE TABLE users (
    userid serial,
    username varchar(255),
    hashpw varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    country varchar(255),
    city varchar(255),
    phonenum varchar(255),
    email varchar(255),
    PRIMARY KEY(userid)
);

CREATE TABLE groups (
    groupid serial,
    groupname varchar(255),
    resourceapi varchar(255),
    datetimeadd timestamptz,
    datetimeremove timestamptz,
    createdby int,
    PRIMARY KEY (groupid),
        CONSTRAINT fk_createdby
            FOREIGN KEY(createdby)
             REFERENCES users(userid)
);

CREATE TABLE resourcetypes (
    resourcetypeid serial,
    resourcetypename varchar(255),
    resourcetypedescription varchar(255),
    resourcetypeapiurl varchar(255),
    resourcetypeapikey varchar(255),
    PRIMARY KEY(resourcetypeid)
);

CREATE TABLE linkownertypes (
    linkownertypeid serial,
    linkownername varchar(255),
    linkownerdescription varchar(255),
    createdate timestamptz,
    createdby int,
    PRIMARY KEY(linkownertypeid),
    CONSTRAINT fk_createdby
        FOREIGN KEY(createdby)
            REFERENCES users(userid)
);

CREATE TABLE links (
    linkid serial,
    linkownerid int,
    linkownertype int,
    createdate timestamptz,
    PRIMARY KEY(linkid),
    CONSTRAINT fk_linkownerid
        FOREIGN KEY(linkownerid)
            REFERENCES users(userid),
    CONSTRAINT fk_linkownertype
        FOREIGN KEY(linkownertype)
            REFERENCES linkownertypes(linkownertypeid)
);

CREATE TABLE resources (
    resourceid serial,
    resourcetype int,
    creatorid int,
    PRIMARY KEY (resourceid),
    CONSTRAINT fk_resourcetype
        FOREIGN KEY(resourcetype)
            REFERENCES resourcetypes(resourcetypeid),
    CONSTRAINT fk_userid
        FOREIGN KEY(creatorid)
            REFERENCES users(userid)
);

CREATE TABLE resourceversions (
    resourceversionid serial,
    resourceid int,
    versionid int,
    linkid int,
    mutable boolean,
    resourcename varchar(255),
    resourcedescription varchar(255),
    resourcelinkurl varchar(255),
    PRIMARY KEY(resourceversionid),
    CONSTRAINT fk_resourceid
        FOREIGN KEY(resourceid)
            REFERENCES resources(resourceid),
    CONSTRAINT fk_linkid
        FOREIGN KEY(linkid)
            REFERENCES links(linkid)
);

CREATE TABLE notes (
    noteid serial,
    resourceversionid int,
    notename varchar(255),
    notebody varchar(255),
    PRIMARY KEY(noteid),
    CONSTRAINT fk_resourceversionid
        FOREIGN KEY(resourceversionid)
            REFERENCES resourceversions(resourceversionid)
);

CREATE TABLE tags (
    tagid serial,
    tag varchar(255),
    createdate timestamptz,
    PRIMARY KEY(tagid)
);

CREATE TABLE notetags (
    notetagid serial,
    noteid int,
    tagid int,
    createdate timestamptz,
    createdby int,
    PRIMARY KEY(notetagid),
    CONSTRAINT fk_noteid
        FOREIGN KEY(noteid)
            REFERENCES notes(noteid),
    CONSTRAINT fk_tagid
        FOREIGN KEY(tagid)
            REFERENCES tags(tagid),
    CONSTRAINT fk_creator
        FOREIGN KEY(createdby)
            REFERENCES users(userid)
);

CREATE TABLE resourcetags (
    resourcetagid serial,
    resourceversionid int,
    tagid int,
    createdate timestamptz,
    createdby int,
    PRIMARY KEY(resourcetagid),
    CONSTRAINT fk_tagid
        FOREIGN KEY(createdby)
            REFERENCES users(userid)
);

CREATE TABLE categories (
    categoryid serial,
    categoryname varchar(255),
    PRIMARY KEY(categoryid)
);

CREATE TABLE groupcategories( 
    categoryid int,
    groupid int,
    PRIMARY KEY(categoryid, groupid)
);

CREATE TABLE categorytags(
    categoryid int,
    tagid int,
    PRIMARY KEY(categoryid, tagid)
);