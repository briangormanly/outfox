import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";

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
    User.hasMany(Group, { foreignKey: "createdby", sourceKey: "id" });
    Group.belongsTo(User, { foreignKey: "createdby", targetKey: "id" });

    User.hasMany(Resource, { foreignKey: "creatorid", sourceKey: "id" });
    Resource.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    Group.hasMany(Resource);
    Resource.belongsToMany(Group, {
      through: "groupresources",
      timestamps: false,
    });

    // Group Sharing
    Group.belongsToMany(User, {
      through: ShareGroup,
      timestamps: false,
    });
    ShareGroup.belongsTo(Group);
    ShareGroup.belongsTo(User);

    // Resource Sharing
    Resource.belongsToMany(User, {
      through: ShareResource,
      timestamps: false,
    })
    ShareResource.belongsTo(Resource);
    ShareResource.belongsTo(User);

  } catch (error) {
    throw new Error("Error setting up relationships");
  }

}

export default Associations;
