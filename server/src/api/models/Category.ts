import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
export class Category extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Category.init({
    catergoryname: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'category_t' // We need to choose the table name it correlates to
});

console.log(Category = sequelize.models.Category);
