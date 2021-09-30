import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Assignments extends Model{
    public id: number;
    public title: string;
    public description: string;
    public attachment_type: string;
    public submission_type: string;
    public creatorid: number;
    public opendate: Date;
    public duedate: Date;
    public closedate: Date;
    public status: string;
    public grade: string;
    public mutable: boolean;
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
        attachment_type: {
            type: DataTypes.STRING,
            allowNull: true      // an assignment does not need to have an attachment with it
        },
        submission_type: {
            type: DataTypes.STRING,
            allowNull: false    // an assignment must allow for a submission
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
            allowNull: false
        },
        mutable:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    },{sequelize, timestamps: true, tableName: "assignments"}
);
export default Assignments;