// File to sync modles with database
// NOT WORKING: ISSUE - Code will not run in file... I must be stupid.


//Import Sequlize
import sequelize, { Sequelize } from "sequelize";
// Import all models
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

// Variable for forcing modles to sync
// true -- force modles to sync with database - USE ONLY IN DEVOLOPMENT
// false -- we dont lose data

// const forceModels = true;

// SYNC Individually - Not Running

/*

(async () => {
  await Category.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await CategoryTag.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await Group.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await GroupCategory.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await Link.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await LinkOwnerType.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await Note.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await NoteTag.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await Resource.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await ResourceTag.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await ResourceType.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await ResourceVersion.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await Tag.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

(async () => {
  await User.sync({ force: forceModels });
  console.log('User modle synced with DB')
})();

*/


// Sync All - NOT WORKING
// (async () => {
//   await sequelize.sync({ force: forceModels });
//   console.log('All Models Synced Successfully');
//   console.log('syncDatabase.ts');
// })
