import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class ResourceType extends Model {}

ResourceType.init({
    // id: {
    //   type:DataTypes.INTEGER,
    //   autoIncrement:true,
    //   primaryKey: true
    // },
    resourcetypename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resourcetypedescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resourcetypeapiurl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resourcetypeapikey: {
        type: DataTypes.STRING,
    },
}, {

    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resourceTypes'
});
