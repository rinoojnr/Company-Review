const Sequelize = require('sequelize');


const sequelize = new Sequelize('company-review','root','Amma007#',{
    dialect: 'mysql',
    host: 'localhost'
})


module.exports = sequelize;