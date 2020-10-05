//Import Sequlize
//import { Sequelize } from "sequelize";
import { sequelize } from './databaseConnection';
// Import all models ['Modles' are 'Tables' in Sequelize ORM]
import { Category } from "./models/Category";
import { CategoryTag } from "./models/CategoryTag";
import { Group } from "./models/Group";
import { GroupCategory } from "./models/GroupCategory";
import { Link } from "./models/Link";
import { LinkOwnerType } from "./models/LinkOwnerType";
import { Note } from "./models/Note";
import { NoteTag } from "./models/NoteTag";
import { Resource } from "./models/Resource";
import { ResourceTag } from "./models/ResourceTag";
import { ResourceType } from "./models/ResourceType";
import { ResourceVersion } from "./models/ResourceVersion";
import { Tag } from "./models/Tag";
import { User } from "./models/User";

/* -------------------------------------------------------
// Variable for forcing modles to sync
// true -- force modles to sync with database - USE ONLY IN DEVOLOPMENT
// false -- we dont lose data
--------------------------------------------------------- */
const forceModels = false;

// Array of all models [Tables]
var modles =
[
  User, Group, Tag, Category,
  CategoryTag, GroupCategory,
  LinkOwnerType, Link, ResourceType,
  Resource, ResourceVersion, Note,
  NoteTag, ResourceTag
]
// Sync all tables to database

export const sync = () => {
  // (async () => {
  //   await sequelize.sync({ force:true }).catch(err => {console.log('ERROR: ' + err)})
  // })
  for (let i = 0; i < modles.length; i++) {
    (async () => {
    	await modles[i].sync({ force:forceModels }).catch(
        err => {console.log("\n\n\nERROR: " + err + "\n\n\n")
      })
    	console.log(modles[i].name + ' synced with DB')
      })();
  }
}
