DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS GroupsT CASCADE;
DROP TABLE IF EXISTS LinkOwnerTypes CASCADE;
DROP TABLE IF EXISTS Links CASCADE;
DROP TABLE IF EXISTS ResourceVersions CASCADE;
DROP TABLE IF EXISTS Resources CASCADE;
DROP TABLE IF EXISTS ResourceTypes CASCADE;
DROP TABLE IF EXISTS Notes CASCADE;
DROP TABLE IF EXISTS NoteTags CASCADE;
DROP TABLE IF EXISTS Tags CASCADE;
DROP TABLE IF EXISTS ResourceTags CASCADE;
DROP TABLE IF EXISTS Categories CASCADE;
DROP TABLE IF EXISTS GroupCategories CASCADE;
DROP TABLE IF EXISTS CategoryTags CASCADE;

CREATE TABLE Users (
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

CREATE TABLE ResourceTypes (
    resourcetypeid serial,
    resourcetypename varchar(255),
    resourcetypedescription varchar(255),
    resourcetypeapiurl varchar(255),
    resourcetypeapikey varchar(255),
    PRIMARY KEY(resourcetypeid)
);

CREATE TABLE GroupsT (
    groupid serial,
    groupname varchar(255),
    resourcetype int,
    resourceapi varchar(255),
    datetimeadd timestamptz,
    datetimeremove timestamptz,
    createdby int,
    PRIMARY KEY (groupid),
    CONSTRAINT fk_resourcetype
        FOREIGN KEY(resourcetype)
            REFERENCES resourcetype_t(resourcetypeid),
    CONSTRAINT fk_createdby
        FOREIGN KEY(createdby)
            REFERENCES Users(userid)
);

CREATE TABLE LinkOwnerTypes (
    linkownertypeid serial,
    linkownername varchar(255),
    linkownerdescription varchar(255),
    createdate timestamptz,
    createdby int,
    PRIMARY KEY(linkownertypeid),
    CONSTRAINT fk_createdby
        FOREIGN KEY(createdby)
            REFERENCES user_t(userid)
);

CREATE TABLE Links (
    linkid serial,
    linkownerid int,
    linkownertype int,
    createdate timestamptz,
    PRIMARY KEY(linkid),
    CONSTRAINT fk_linkownerid
        FOREIGN KEY(linkownerid)
            REFERENCES user_t(userid),
    CONSTRAINT fk_linkownertype
        FOREIGN KEY(linkownertype)
            REFERENCES linkownertype_t(linkownertypeid)
);

CREATE TABLE Resources (
    resourceid serial,
    resourcetype int,
    creatorid int,
    PRIMARY KEY (resourceid),
    CONSTRAINT fk_resourcetype
        FOREIGN KEY(resourcetype)
            REFERENCES resourcetype_t(resourcetypeid),
    CONSTRAINT fk_userid
        FOREIGN KEY(creatorid)
            REFERENCES user_t(userid)
);

CREATE TABLE ResourceVersions (
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
            REFERENCES resource_t(resourceid),
    CONSTRAINT fk_linkid
        FOREIGN KEY(linkid)
            REFERENCES link_t(linkid)
);

CREATE TABLE Notes (
    noteid serial,
    resourceversionid int,
    notename varchar(255),
    notebody varchar(255),
    PRIMARY KEY(noteid),
    CONSTRAINT fk_resourceversionid
        FOREIGN KEY(resourceversionid)
            REFERENCES resourceversion_t(resourceversionid)
);

CREATE TABLE Tags (
    tagid serial,
    tag varchar(255),
    createdate timestamptz,
    PRIMARY KEY(tagid)
);

CREATE TABLE NoteTags (
    notetagid serial,
    noteid int,
    tagid int,
    createdate timestamptz,
    createdby int,
    PRIMARY KEY(notetagid),
    CONSTRAINT fk_noteid
        FOREIGN KEY(noteid)
            REFERENCES note_t(noteid),
    CONSTRAINT fk_tagid
        FOREIGN KEY(tagid)
            REFERENCES tag_t(tagid),
    CONSTRAINT fk_creator
        FOREIGN KEY(createdby)
            REFERENCES user_t(userid)
);

CREATE TABLE ResourceTags (
    resourcetagid serial,
    resourceversionid bigint,
    tagid int,
    createdate timestamptz,
    createdby int,
    PRIMARY KEY(resourcetagid),
    CONSTRAINT fk_tagid
        FOREIGN KEY(createdby)
            REFERENCES user_t(userid)
);

CREATE TABLE Categories (
    categoryid serial,
    categoryname varchar(255),
    PRIMARY KEY(categoryid)
);

CREATE TABLE GroupCategories( 
    categoryid int,
    groupid int,
    PRIMARY KEY(categoryid, groupid)
);

CREATE TABLE CategoryTags(
    categoryid int,
    tagid int,
    PRIMARY KEY(categoryid, tagid)
);