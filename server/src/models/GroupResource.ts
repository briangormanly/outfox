import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

import Group from "./Group";
import Resource from "./Resource";

class GroupResource extends Model{
    public groupid: number;
    public resourceid: number;
}

export default GroupResource;