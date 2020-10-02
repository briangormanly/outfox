import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'johngustafson', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export class Group extends Model {}

Group.init({
    groupid: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false
    },
    groupname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resourcetype: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resourceapi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datetimeadd: {
        type: DataTypes.STRING
    },
    datetimeremove: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'group_t' // We need to choose the table name it correlates to
});