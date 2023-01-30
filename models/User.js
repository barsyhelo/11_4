const path = require('path');
const { sequelize } = require('../DB');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM(['male', 'female']),
        allowNull: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    }
}, {
    // Other model options go here
    tableName: 'users',
    timestamps: false
});

module.exports = { User }
