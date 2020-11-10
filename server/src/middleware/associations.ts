import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";
import Note from "../models/Note"

// Going to be Reconnected once we begin querying
// import Category from "./Category";
// import CategoryTag from "./CategoryTag";
// import GroupCategory from "./GroupCategory";
// import Link from "./Link";
// import LinkOwnerType from "./LinkOwnerType";
// import NoteTag from "./NoteTag";
// import ResourceTag from "./ResourceTag";
// import ResourceType from "./ResourceType";
// import ResourceVersion from "./ResourceVersion";
// import Tag from "./Tag";

async function Associations(): Promise<void> {
  try {
    User.hasMany(Group, { foreignKey: "createdby", sourceKey: "id" });
    Group.belongsTo(User, { foreignKey: "createdby", targetKey: "id" });

    User.hasMany(Resource, { foreignKey: "creatorid", sourceKey: "id" });
    Resource.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    Resource.hasMany(Note, {foreignKey:"resourceId", sourceKey:"id"});
    Note.belongsTo(Resource, {foreignKey:"resourceId", targetKey:"id"});
    
    
    /* //Not sure if needed
    User.hasMany(User);
    User.belongsToMany(User, {
      through:"friends",
      timestamps: true})
    */


    Note.hasMany( Note, { as: 'child', foreignKey: 'parentId'});

    Group.hasMany(Resource);
    Resource.belongsToMany(Group, {
      through: "groupresources",
      timestamps: false,
    });
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
