import User from "./User";
import Group from "./Group";

// Going to be Reconnected once we begin querying
// import Category from "./Category";
// import CategoryTag from "./CategoryTag";
// import GroupCategory from "./GroupCategory";
// import Link from "./Link";
// import LinkOwnerType from "./LinkOwnerType";
// import Note from "./Note";
// import NoteTag from "./NoteTag";
// import Resource from "./Resource";
// import ResourceTag from "./ResourceTag";
// import ResourceType from "./ResourceType";
// import ResourceVersion from "./ResourceVersion";
// import Tag from "./Tag";

const Associations = (): void => {
  User.hasMany(Group, { foreignKey: "createdby", sourceKey: "id" });
  Group.belongsTo(User, { foreignKey: "createdby", targetKey: "id" });
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
};

export default Associations;
