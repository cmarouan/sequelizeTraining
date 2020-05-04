const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_helloo', 'helloo', 'toor', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;