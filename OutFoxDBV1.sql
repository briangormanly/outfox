CREATE DATABASE outfoxdb;

CREATE TABLE user (
    userid serial primary key,
    username varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    country varchar(255),
    city varchar(255),
    phonenum int,
    email varchar(255)
);

CREATE TABLE group (
    groupid serial primary key,
    resourcetype int,
    resourceapi varchar(255),
    datetimeadd timestamptz,
    datetimeremove timestamptz
);

CREATE TABLE linkownertype (
    linkownerid serial primary key,
    linkowner int,
    linkownerdescription varchar(255),
    createdate timestamptz
);

CREATE TABLE link (
    linkid serial primary key,
    linkownerid int,
    linkownertype int,
    createdate timestamptz
);

CREATE TABLE resourceversion (
    resourceversionid serial primary key,
    resourceid int,
    versionid int,
    linkid int,
    mutable boolean,
    resourcename varchar(255),
    resourcelinkurl varchar(255)
);

CREATE TABLE resourcetable (
    resourceid serial primary key,
    resourcetype int,
    creatorid int
);

CREATE TABLE resourcetype (
    resourcetypeid serial primary key,
    resourcetypename varchar(255),
    resourcetypedescription varchar(255),
    resourcetypeapiurl varchar(255),
    resourcetypeapikey varchar(255)
);

CREATE TABLE note (
    noteid serial primary key,
    resourceversionid int,
    notename varchar(255),
    notebody varchar(255)
);

CREATE TABLE notetag (
    notetagid serial primary key,
    noteid int,
    tagid int,
    createdate timestamptz,
    createby int
);

CREATE TABLE tag (
    tagid serial primary key,
    tag varchar(255),
    createdate timestamptz
);

CREATE TABLE resourcetag (
    resourcetagid serial primary key,
    resourceversionid int,
    tagid int,
    creatorid timestamptz,
    createby int
);



/* !!!!!!!!Testing new names!!!!!!!!*/


CREATE DATABASE outfoxdb;

CREATE TABLE user_t (
    userid serial primary key,
    username varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    country varchar(255),
    city varchar(255),
    phonenum int,
    email varchar(255)
);

CREATE TABLE group_t (
    groupid serial primary key,
    resourcetype int,
    resourceapi varchar(255),
    datetimeadd timestamptz,
    datetimeremove timestamptz
);

CREATE TABLE linkownertype_t (
    linkownerid serial primary key,
    linkowner int,
    linkownerdescription varchar(255),
    createdate timestamptz
);

CREATE TABLE link_t (
    linkid serial primary key,
    linkownerid int,
    linkownertype int,
    createdate timestamptz
);

CREATE TABLE resourceversion_t (
    resourceversionid serial primary key,
    resourceid int,
    versionid int,
    linkid int,
    mutable boolean,
    resourcename varchar(255),
    resourcelinkurl varchar(255)
);

CREATE TABLE resource_t (
    resourceid serial primary key,
    resourcetype int,
    creatorid int
);

CREATE TABLE resourcetype_t (
    resourcetypeid serial primary key,
    resourcetypename varchar(255),
    resourcetypedescription varchar(255),
    resourcetypeapiurl varchar(255),
    resourcetypeapikey varchar(255)
);

CREATE TABLE note_t (
    noteid serial primary key,
    resourceversionid int,
    notename varchar(255),
    notebody varchar(255)
);

CREATE TABLE notetag_t (
    notetagid serial primary key,
    noteid int,
    tagid int,
    createdate timestamptz,
    createby int
);

CREATE TABLE tag_t (
    tagid serial primary key,
    tag varchar(255),
    createdate timestamptz
);

CREATE TABLE resourcetag_t (
    resourcetagid serial primary key,
    resourceversionid int,
    tagid int,
    creatorid timestamptz,
    createby int
);