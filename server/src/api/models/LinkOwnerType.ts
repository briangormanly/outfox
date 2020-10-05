import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
export class LinkOwnerType extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
LinkOwnerType.init({
    linkownername: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkownerdescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'linkownertype_t' // We need to choose the table name it correlates to
});
