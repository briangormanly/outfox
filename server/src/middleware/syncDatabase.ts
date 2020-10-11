// import Category from "../models/Category";
// import CategoryTag from "../models/CategoryTag";
import Group from "../models/Group";
// import GroupCategory from "../models/GroupCategory";
// import Note from "../models/Note";
// import NoteTag from "../models/NoteTag";
import Resource from "../models/Resource";
// import ResourceTag from "../models/ResourceTag";
// import Tag from "../models/Tag";
import User from "../models/User";
import Associations from "./associations";
import sequelize from "./databaseConnection";
// Array of all models [Tables]
const models = [
  User,
  Group,
  //  Tag,
  //  Category,
  //  CategoryTag,
  //  GroupCategory,
  Resource,
  //  Note,
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
    sequelize.sync({ force: true });
  } catch (error) {
    throw new Error("Associations not hooked up");
  }
}

export default sync;
