import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class ResourceType extends Model {}

ResourceType.init({
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
    tableName: 'ResourceTypes' // We need to choose the table name it correlates to
});

(async () => {
	await ResourceType.sync();
	console.log('ResourceType synced with DB')
  })();
