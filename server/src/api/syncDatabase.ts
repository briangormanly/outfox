import Category from "./models/Category";
import CategoryTag from "./models/CategoryTag";
import Group from "./models/Group";
import GroupCategory from "./models/GroupCategory";
import Link from "./models/Link";
import LinkOwnerType from "./models/LinkOwnerType";
import Note from "./models/Note";
import NoteTag from "./models/NoteTag";
import Resource from "./models/Resource";
import ResourceTag from "./models/ResourceTag";
import ResourceType from "./models/ResourceType";
import ResourceVersion from "./models/ResourceVersion";
import Tag from "./models/Tag";
import User from "./models/User";

// Array of all models [Tables]
const models = [
  User,
  Group,
  Tag,
  Category,
  CategoryTag,
  GroupCategory,
  LinkOwnerType,
  Link,
  ResourceType,
  Resource,
  ResourceVersion,
  Note,
  NoteTag,
  ResourceTag,
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
}

export default sync;
