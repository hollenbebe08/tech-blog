const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const userData = [
    {
        username: 'timgriffith',
        password: '12345'
    },
    {
        username: 'hollenbebe08',
        password: '12345'
    },
    {
        username: 'martymcfly',
        password: '12345'
    },
    {
        username: 'bobsaget',
        password: '12345'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;