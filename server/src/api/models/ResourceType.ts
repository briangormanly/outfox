import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
export class ResourceType extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
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
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resourcetype_t' // We need to choose the table name it correlates to
});

console.log(ResourceType = sequelize.models.ResourceType);
