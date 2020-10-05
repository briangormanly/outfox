import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
export class Group extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Group.init({
    groupname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //deleted resource tyoe
    resourceapi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datetimeadd: {
        type: DataTypes.DATE,
    },
    datetimeremove: {
        type: DataTypes.DATE,
        defaultValue: null
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'group_t' // We need to choose the table name it correlates to
});
