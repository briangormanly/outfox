import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
export class Tag extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Tag.init({
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdate: {
        type: DataTypes.DATETIME,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'tag_t' // We need to choose the table name it correlates to
});

console.log(Tag = sequelize.models.Tag);
