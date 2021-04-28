const Sequelize = require('sequelize')

module.exports = new Sequelize('nodeauth', 'root', 998999, {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false
})