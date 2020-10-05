import { Group } from "./Group";
import { User } from "./User";

export const Associations = () => {
    User.hasMany(Group);
    Group.belongsTo(User);
}
