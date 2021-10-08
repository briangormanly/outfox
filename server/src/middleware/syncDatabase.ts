import Group from "../models/Group";
import Note from "../models/Comment";
import Resource from "../models/Resource";
import User from "../models/User";
import Lessons from "../models/Lessons";
import Assignments from "../models/Assignments";
import Associations from "./associations";
import ShareResource from "../models/ShareResource";
import ShareGroup from "../models/ShareGroup";
import ShareAssignments from "../models/ShareAssignments";
import ShareLessons from "../models/ShareLessons";
import Friend from "../models/Friend";
import File from "../models/File";
import sequelize from "./databaseConnection";

// Array of all models [Tables]
const models = [
  User,
  Group,
  Resource,
  Lessons,
  Assignments,
  ShareGroup,
  ShareResource,
  ShareAssignments,
  ShareLessons,
  Friend,
  File,
  Note,
  //  NoteTag,
  //  ResourceTag,
];

async function sync(): Promise<void> {
  for (const iterator of models) {
    try {
      //iterator.sync({force:true});
      console.log(iterator, "synced.");
    } catch {
      console.log(iterator, "error syncing.");
    }
  }

  try {
    Associations();

    //sequelize.sync({ alter: true });
    //sequelize.sync({ force: true });
    sequelize.sync();
  } catch (error) {
    throw new Error("Associations not hooked up");
  }
}

export default sync;
