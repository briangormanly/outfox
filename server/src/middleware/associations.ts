import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";

async function Associations(): Promise<void> {
  try {
    User.hasMany(Group, { foreignKey: "createdby", sourceKey: "id" });
    Group.belongsTo(User, { foreignKey: "createdby", targetKey: "id" });

    User.hasMany(Resource, { foreignKey: "creatorid", sourceKey: "id" });
    Resource.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });
    
    /* //Not sure if needed
    User.hasMany(User);
    User.belongsToMany(User, {
      through:"friends",
      timestamps: true})
    */

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
