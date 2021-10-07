import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";
import Resource from "./Resource";
import Assignments from "./Assignments";

class File extends Model{
    public id: number;
    public uuid: string;
    public filename: string;
    public filetype: string;
    public dateupload: Date;
    public userid: number;
    public resourceid: number;
    public assignmentid: number;
}

File.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        uuid:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        filename:{
            type: DataTypes.STRING,
            allowNull: false
        },
        filetype:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dateupload:{
            type: DataTypes.DATE
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: User,
              key: "id",
            },
        },
        resourceid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: Resource,
              key: "id",
            },
        },
        assignmentid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: Assignments,
              key: "id",
            },
        },
    },{sequelize, timestamps: true, tableName: "file"}
);

export default File;