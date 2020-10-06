<<<<<<< HEAD
//Import Sequlize
//import { Sequelize } from "sequelize";
import { sequelize } from './databaseConnection';
// Import all models ['models' are 'Tables' in Sequelize ORM]
=======
>>>>>>> origin/backend
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

<<<<<<< HEAD
/* -------------------------------------------------------
// Variable for forcing models to sync
// true -- force models to sync with database - USE ONLY IN DEVOLOPMENT
// false -- we dont lose data
--------------------------------------------------------- */
const forceModels = false;

// Array of all models [Tables]
var models =
=======
// Array of all models [Tables]
const models =
>>>>>>> origin/backend
[
  User, Group, Tag, Category,
  CategoryTag, GroupCategory,
  LinkOwnerType, Link, ResourceType,
  Resource, ResourceVersion, Note,
  NoteTag, ResourceTag
];

<<<<<<< HEAD
export const sync = () => {
  var errorTest = false;
  for (let i = 0; i < models.length; i++) {
    (async () => {
    	await models[i].sync({ force:forceModels }).catch(
        err => {
          errorTest = true;
          console.log("\n\nERROR: " + err + "\n\n")
      })
      if (!errorTest) {
        console.log('\nTABLE SYNCHRONIZED: ' + models[i].name + '\n')
      }
      })();
=======
// Sync all tables to database
export const sync = async () => {
  for (const iterator of models) {
    iterator.sync()
      .then(() => {
        console.log(iterator.name + ' synced with the database.');
      })
      .catch((error) => {
        console.log(iterator.name + ' had an error syncing with the database.');
      });
>>>>>>> origin/backend
  }
}

