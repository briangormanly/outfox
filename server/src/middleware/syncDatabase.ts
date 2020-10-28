import Group from "../models/Group";
// import Note from "../models/Note";
import Resource from "../models/Resource";
import User from "../models/User";
import Associations from "./associations";
import ShareResource from "../models/ShareResource";
import ShareGroup from "../models/ShareGroup";
import sequelize from "./databaseConnection";
// Array of all models [Tables]
const models = [
  User,
  Group,
  Resource,
  ShareGroup,
  ShareResource
  //  Note,
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
    sequelize.sync();
  } catch (error) {
    throw new Error("Associations not hooked up");
  }
}

export default sync;
