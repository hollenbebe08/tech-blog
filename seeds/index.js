const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('----CONNECTED TO DATABASE-----');

    await seedUsers();
    console.log('-----USERS SEEDED-----');

    await seedPosts();
    console.log('-------POSTS WERE SEEDED------');

    await seedComments();
    console.log('-------COMMENTS WERE SEEDED------');

    process.exit(0);
};

seedAll();