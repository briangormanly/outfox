import Group from "../models/Group";
// import Note from "../models/Note";
// import GroupCategory from "../models/GroupCategory";
import Note from "../models/Note";
// import NoteTag from "../models/NoteTag";
import Resource from "../models/Resource";
import User from "../models/User";
import Associations from "./associations";
import ShareResource from "../models/ShareResource";
import ShareGroup from "../models/ShareGroup";
import sequelize from "./databaseConnection";
import Friend from "../models/Friend";
// Array of all models [Tables]
const models = [
  User,
  Group,
  Resource,
  ShareGroup,
  ShareResource,
  Friend,
  //  Note,
  Note,
  //  NoteTag,
  //  ResourceTag,
];

async function sync(): Promise<void> {
  for (const iterator of models) {
    try {
      iterator.sync();
      console.log(iterator, "synced.");
    } catch {
      console.log(iterator, "error syncing.");
    }
  }

  try {
    Associations();
    // sequelize.sync({ force: true });
    // sequelize.sync({ alter: true });
    sequelize.sync({ force: true });
  } catch (error) {
    throw new Error("Associations not hooked up");
  }
}

export default sync;
