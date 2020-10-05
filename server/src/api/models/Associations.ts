import { Group } from "./Group";
import { User } from "./User";

export const Associations = () => {
    User.hasMany(Group, {foreignKey: 'createdby', sourceKey: 'userid'});
    Group.belongsTo(User, {foreignKey: 'createdby', targetKey: 'userid'});
    Group.sync();
}
