const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const Review = sequelize.define('review',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pros: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cons: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports = Review;