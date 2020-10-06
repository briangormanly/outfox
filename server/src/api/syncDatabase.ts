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

// Array of all models [Tables]
const models =
[
  User, Group, Tag, Category,
  CategoryTag, GroupCategory,
  LinkOwnerType, Link, ResourceType,
  Resource, ResourceVersion, Note,
  NoteTag, ResourceTag
];


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
  }
}
