import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Lessons from "./Lessons";
import User from "./User";

class Assignments extends Model{
    public id: number;
    public title: string;
    public description: string;
    public creatorid: number;
    public opendate: Date;
    public duedate: Date;
    public closedate: Date;
    public status: string;
    public grade: string;
    public mutable: boolean;
    public LessonId: number;
}

Assignments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creatorid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: User,
              key: "id",
            },
        },
        opendate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        duedate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        closedate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        grade:{
            type: DataTypes.STRING,
            allowNull: true
        },
        mutable:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        LessonId:{
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Lessons,
                key: "id"
            }
        }
    },{sequelize, timestamps: true, tableName: "assignments"}
);
export default Assignments;