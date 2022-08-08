const { Post } = require('../models');

const postData = [
    {
        title: 'HTML is the best!',
        post_text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1
    },
    {
        title: 'All about MVC',
        post_text: 'Vitae auctor eu augue ut lectus arcu',
        user_id: 2
    },
    {
        title: 'Why CSS is basic',
        post_text: 'Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.',
        user_id: 3,
    },
    {
        title: 'Tech Wars',
        post_text: 'Eros donec ac odio tempor orci. Sapien faucibus et molestie ac.',
        user_id: 4
    },
    {
        title: 'MERN - A history',
        post_text: 'Sed risus ultricies tristique nulla aliquet enim tortor. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem',
        user_id: 1
    },
    {
        title: 'Handlebars vs REACT',
        post_text: 'Nibh ipsum consequat nisl vel pretium. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.',
        user_id: 2
    },
    {
        title: 'The Basics of JavaScript',
        post_text: ' Purus viverra accumsan in nisl nisi scelerisque. Duis at tellus at urna condimentum mattis pellentesque id.',
        user_id: 3

    },
    {
        title: 'MVC and YOU!',
        post_text: 'Porta non pulvinar neque laoreet suspendisse interdum. Nec dui nunc mattis enim ut tellus elementum.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;