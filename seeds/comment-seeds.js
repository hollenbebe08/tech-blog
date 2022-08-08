const {Comment} = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Habitant morbi tristique senectus et netus et. Eu ultrices vitae auctor eu augue ut. ',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Sed viverra tellus in hac habitasse platea. Amet massa vitae tortor condimentum lacinia.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'Scelerisque varius morbi enim nunc.',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Pharetra massa massa ultricies mi quis hendrerit dolor magna.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 2,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;