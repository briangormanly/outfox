DROP TABLE IF EXISTS user_t CASCADE;
DROP TABLE IF EXISTS group_t CASCADE;
DROP TABLE IF EXISTS linkownertype_t CASCADE;
DROP TABLE IF EXISTS link_t CASCADE;
DROP TABLE IF EXISTS resourceversion_t CASCADE;
DROP TABLE IF EXISTS resource_t CASCADE;
DROP TABLE IF EXISTS resourcetype_t CASCADE;
DROP TABLE IF EXISTS note_t CASCADE;
DROP TABLE IF EXISTS notetag_t CASCADE;
DROP TABLE IF EXISTS tag_t CASCADE;
DROP TABLE IF EXISTS resourcetag_t CASCADE;
DROP TABLE IF EXISTS category_t CASCADE;
DROP TABLE IF EXISTS groupcategory_t CASCADE;
DROP TABLE IF EXISTS categorytag_t CASCADE;

CREATE TABLE user_t (
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

CREATE TABLE resourcetype_t (
    resourcetypeid serial,
    resourcetypename varchar(255),
    resourcetypedescription varchar(255),
    resourcetypeapiurl varchar(255),
    resourcetypeapikey varchar(255),
    PRIMARY KEY(resourcetypeid)
);

CREATE TABLE group_t (
    groupid serial,
    groupname varchar(255),
    resourcetype int,
    resourceapi varchar(255),
    datetimeadd timestamptz,
    datetimeremove timestamptz,
    PRIMARY KEY (groupid),
    CONSTRAINT fk_resourcetype
        FOREIGN KEY(resourcetype)
            REFERENCES resourcetype_t(resourcetypeid)
);

CREATE TABLE linkownertype_t (
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

CREATE TABLE link_t (
    linkid serial,
    linkownerid int,
    linkownertype int,
    createdate timestamptz,
    PRIMARY KEY(linkid),
    CONSTRAINT fk_linkowner
        FOREIGN KEY(linkownerid)
            REFERENCES user_t(userid),
    CONSTRAINT fk_linkownertype
        FOREIGN KEY(linkownertype)
            REFERENCES linkownertype_t(linkownertypeid)
);

CREATE TABLE resource_t (
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

CREATE TABLE resourceversion_t (
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

CREATE TABLE note_t (
    noteid serial,
    resourceversionid int,
    notename varchar(255),
    notebody varchar(255),
    PRIMARY KEY(noteid),
    CONSTRAINT fk_resourceversionid
        FOREIGN KEY(resourceversionid)
            REFERENCES resourceversion_t(resourceversionid)
);

CREATE TABLE tag_t (
    tagid serial,
    tag varchar(255),
    createdate timestamptz,
    PRIMARY KEY(tagid)
);

CREATE TABLE notetag_t (
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

CREATE TABLE resourcetag_t (
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

CREATE TABLE category_t (
    categoryid serial,
    categoryname varchar(255),
    PRIMARY KEY(categoryid)
);

CREATE TABLE groupcategory_t( 
    groupcategoryid serial,
    categoryid int,
    groupid int,
    PRIMARY KEY(groupcategoryid),
    CONSTRAINT fk_categoryid
        FOREIGN KEY(categoryid)
            REFERENCES category_t(categoryid),
    CONSTRAINT fk_groupid
        FOREIGN KEY(groupid)
            REFERENCES group_t(groupid)
);

CREATE TABLE categorytag_t(
    categorytagid serial,
    categoryid int,
    tagid int,
    PRIMARY KEY(categorytagid),
    CONSTRAINT fk_categoryid
        FOREIGN KEY(categoryid)
            REFERENCES category_t(categoryid),
    CONSTRAINT fk_tagid
        FOREIGN KEY(tagid)
            REFERENCES tag_t(tagid)
);