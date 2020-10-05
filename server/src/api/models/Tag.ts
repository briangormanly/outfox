import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class Tag extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Tag.init({
    tag: {
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
    tableName: 'Tags' // We need to choose the table name it correlates to
});

<<<<<<< HEAD
// Sync Model to Database
(async () => {
  await Tag.sync({ force: true });
  console.log('Tag modle synced with DB')
})();
=======

(async () => {
	await Tag.sync();
	console.log('Tag synced with DB')
  })();
>>>>>>> origin/backend
