import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";
import Friend from "../models/Friend";

async function Associations(): Promise<void> {
  try {
    User.hasMany(Group, { foreignKey: "createdby", sourceKey: "id" });
    Group.belongsTo(User, { foreignKey: "createdby", targetKey: "id" });

    User.hasMany(Resource, { foreignKey: "creatorid", sourceKey: "id" });
    Resource.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    User.hasMany(Friend, { foreignKey: "requesterid", sourceKey: "id" });
    Friend.belongsTo(User, {
      foreignKey: "addresseeid",
      targetKey: "id",
    });

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
    });
    ShareResource.belongsTo(Resource);
    ShareResource.belongsTo(User);
  } catch (error) {
    throw new Error("Error setting up relationships");
  }
}

export default Associations;
