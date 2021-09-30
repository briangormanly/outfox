import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";
import Assignments from "./Assignments";

class ShareAssignments extends Model{
    public id: number;
    public assignmentid: number;
    public userid: number;
}

ShareAssignments.init(
    {
        SharedID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        AssignmentId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Assignments,
                key: "id"
            }
        },
        Sharedby:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        UserId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: User,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: "shareassignments"
    }
);

export default ShareAssignments;