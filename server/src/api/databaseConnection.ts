import { Association, Sequelize } from 'sequelize';
export const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    username: 'sqlize',
    dialect: 'postgres',
    logging: false
});
