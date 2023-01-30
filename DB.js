const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('social_network', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize };