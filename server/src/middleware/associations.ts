import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";
import Note from "../models/Note";
import Friend from "../models/Friend";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";

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

    Resource.hasMany(Note, { foreignKey: "resourceId", sourceKey: "id" });
    Note.belongsTo(Resource, { foreignKey: "resourceId", targetKey: "id" });

    Note.hasMany(Note, { as: "child", foreignKey: "parentId" });

    // Friend Requests -----------------------------------------------------------------------------------------------------------------------------//
    //User.hasMany(Friend, {as: "RequestSentFrom", foreignKey: "requesterid", sourceKey: "id" });
    Friend.belongsTo(User, {
      as: "RequestSentFrom",
      foreignKey: "requesterid",
      targetKey: "id",
    });
    Friend.belongsTo(User, {
      as: "RequestSentTo",
      foreignKey: "addresseeid",
      targetKey: "id",
    });
    // End of Friend Requests -----------------------------------------------------------------------------------------------------------------------//
    Group.hasMany(Resource);
    Resource.belongsToMany(Group, {
      through: "groupresources",
      timestamps: false,
    });

    // Group Sharing -------------------------------------------------------------------------------------------------------------------------------//
    Group.belongsToMany(User, {
      through: ShareGroup,
      timestamps: false,
    });

    ShareGroup.belongsTo(Group, {
      as: "GroupShared",
      foreignKey: "GroupId",
      targetKey: "id",
    });

    ShareGroup.belongsTo(User, {
      as: "SharedTo",
      foreignKey: "UserId",
      targetKey: "id",
    });

    ShareGroup.belongsTo(User, {
      as: "SharedFrom",
      foreignKey: "Sharedby",
      targetKey: "id",
    });
    // End of Group Sharing--------------------------------------------------------------------------------------------------------------------------//

    // Resource Sharing ----------------------------------------------------------------------------------------------------------------------------//
    Resource.belongsToMany(User, {
      through: ShareResource,
      timestamps: false,
    });
    ShareResource.belongsTo(Resource, {
      as: "ResourceShared",
      foreignKey: "ResourceId",
      targetKey: "id",
    });

    ShareResource.belongsTo(User, {
      as: "SharedTo",
      foreignKey: "UserId",
      targetKey: "id",
    });

    ShareResource.belongsTo(User, {
      as: "SharedFrom",
      foreignKey: "Sharedby",
      targetKey: "id",
    });

    // End of Resource Sharing ----------------------------------------------------------------------------------------------------------------------//
  } catch (error) {
    console.log(error);
  }
}

export default Associations;
