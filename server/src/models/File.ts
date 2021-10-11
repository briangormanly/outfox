import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class File extends Model{
    public id: number;
    public uuid: string;
    public uri: string;
    public filename: string;
    public filetype: string;
    public dateupload: Date;
    public userid: number;
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
        uri:{
            type: DataTypes.STRING,
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
        }
    },{sequelize, timestamps: true, tableName: "file"}
);

export default File;