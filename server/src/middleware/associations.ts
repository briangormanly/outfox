import User from "../models/User";
import Group from "../models/Group";
import Resource from "../models/Resource";
import Note from "../models/Note";
import ResourceVersion from "../models/ResourceVersion";
import Tag from "../models/Tag";

async function Associations(): Promise<void> {
  try {

    // Associations for User and Group
    User.hasMany(Group, { foreignKey: "creatorid", sourceKey: "id" });
    Group.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    User.hasMany(Resource, { foreignKey: "creatorid", sourceKey: "id" });
    Resource.belongsTo(User, { foreignKey: "creatorid", targetKey: "id" });

    // Associations for Resource and Group
    // Group.hasMany(Resource);
    Resource.belongsToMany(Group, {
      through: "groupresources",
      timestamps: false,
    });
    // Group.belongsToMany(Resource, {
    //   through: "groupresources",
    //   timestamps: false,
    // });

    // Associations for Tag and Group
    // Group.hasMany(Tag);
    Tag.belongsToMany(Group, {
      through: "grouptag",
      timestamps: false,
    });

    // Associations for Resource and Note
    Resource.hasMany(Note, { foreignKey: "creatorid", sourceKey: "id" });
    Note.belongsTo(Resource, { foreignKey: "creatorid", targetKey: "id" });

    // Associations for Resource to Resource
    Resource.hasOne(Resource, {foreignKey: "copiedfrom", sourceKey:"id"})

  } catch (error) {
    throw new Error("Error setting up relationships");
  }
}

export default Associations;
