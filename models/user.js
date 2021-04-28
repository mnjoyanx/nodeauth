const Sequelize = require('sequelize')
const db = require('../config/db')


const User = db.define('user', {
    name: {
        type: Sequelize.TEXT
    },
    username: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
             len: [6, 20],
        }
    }
})


module.export = User