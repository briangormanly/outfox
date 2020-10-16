import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";

// Going to be Reconnected once we begin querying
// import Category from "./Category";
// import CategoryTag from "./CategoryTag";
// import GroupCategory from "./GroupCategory";
// import Link from "./Link";
// import LinkOwnerType from "./LinkOwnerType";
// import Note from "./Note";
// import NoteTag from "./NoteTag";
// import ResourceTag from "./ResourceTag";
// import ResourceType from "./ResourceType";
// import ResourceVersion from "./ResourceVersion";
// import Tag from "./Tag";

async function Associations(): Promise<void> {
  try {
    User.hasMany(Group, { foreignKey: "creatorid", sourceKey: "id" });
    Group.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    User.hasMany(Resource, { foreignKey: "creatorid", sourceKey: "id" });
    Resource.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    // Group.hasMany(Resource);
    Resource.belongsToMany(Group, {
      through: "groupresources",
      timestamps: false,
    });

    // Group.hasMany(Tag);
    Tag.belongsToMany(Group, {
      through: "grouptag",
      timestamps: false,
    });

    Resource.hasMany(Note, { foreignKey: "creatorid", sourceKey: "id" });
    Note.belongsTo(Resource, { foreignKey: "creatorid", targetKey: "id" });

    Resource.hasOne(Resource, {foreignKey: "copiedfrom", sourceKey:"id"})






  } catch (error) {
    throw new Error("Error setting up relationships");
  }

  // Tag.belongsToMany(Category, { through: CategoryTag });
  // Category.belongsToMany(Tag, { through: CategoryTag });
  // Group.belongsToMany(Category, { through: GroupCategory });
  // Category.belongsToMany(Group, { through: GroupCategory });
  // LinkOwnerType.belongsToMany(User, { through: Link });
  // User.belongsToMany(LinkOwnerType, { through: Link });
  // ResourceVersion.hasMany(Note);
  // Note.belongsToMany(Tag, { through: NoteTag });
  // Tag.belongsToMany(Note, { through: NoteTag });
  // ResourceType.belongsToMany(User, { through: Resource });
  // User.belongsToMany(ResourceType, { through: Resource });
  // Tag.belongsToMany(ResourceVersion, { through: ResourceTag });
  // ResourceVersion.belongsToMany(Tag, { through: ResourceTag });
  // User.hasMany(ResourceTag);
  // Resource.belongsToMany(Link, { through: ResourceVersion });
  // Link.belongsToMany(Resource, { through: ResourceVersion });
}

export default Associations;
