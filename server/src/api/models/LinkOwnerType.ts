import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

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

// Sync Model to Database
(async () => {
  await LinkOwnerType.sync({ force: true });
  console.log('LinkOwnerType modle synced with DB')
})();
