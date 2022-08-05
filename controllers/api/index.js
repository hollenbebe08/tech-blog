const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

//these are the params that will show in the url: ex www.tech-blog.com/users
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;