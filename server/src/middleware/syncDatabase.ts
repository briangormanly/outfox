// Tables / Models
import Group from "../models/Group";
import Note from "../models/Note";
import Resource from "../models/Resource";
import Tag from "../models/Tag";
import User from "../models/User";

// Associations
import Associations from "./associations";

// Database Connection
import sequelize from "./databaseConnection";

// Array of all models [Tables]
const models = [
  User,
  Group,
  Tag,
  Resource,
  Note
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
    sequelize.sync();
  } catch (error) {
    throw new Error("Associations not hooked up");
  }
}

export default sync;
