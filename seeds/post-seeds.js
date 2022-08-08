const { Post } = require('../models');

const postData = [
    {
        title: 'HTML is the best!',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1
    },
    {
        title: 'All about MVC',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu',
        user_id: 2
    },
    {
        title: 'Why CSS is basic',
        post_text: 'Scelerisque purus semper eget duis at tellus at. Tortor vitae purus faucibus ornare. Iaculis eu non diam phasellus vestibulum lorem sed. Tellus cras adipiscing enim eu turpis. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.',
        user_id: 3,
    },
    {
        title: 'Tech Wars',
        post_text: 'Arcu odio ut sem nulla. Eros donec ac odio tempor orci dapibus. Fermentum odio eu feugiat pretium nibh. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Eros donec ac odio tempor orci. Sapien faucibus et molestie ac.',
        user_id: 4
    },
    {
        title: 'MERN - A history',
        post_text: 'Interdum posuere lorem ipsum dolor sit. Nibh mauris cursus mattis molestie. Sed risus ultricies tristique nulla aliquet enim tortor. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem',
        user_id: 1
    },
    {
        title: 'Handlebars vs REACT',
        post_text: 'Aliquam ut porttitor leo a. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Aliquam ultrices sagittis orci a scelerisque purus. Cursus in hac habitasse platea. Nibh ipsum consequat nisl vel pretium. Porttitor leo a diam sollicitudin tempor. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.',
        user_id: 2
    },
    {
        title: 'The Basics of JavaScript',
        post_text: 'In nibh mauris cursus mattis molestie. Massa tincidunt dui ut ornare lectus sit amet. Tellus id interdum velit laoreet. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Purus viverra accumsan in nisl nisi scelerisque. Duis at tellus at urna condimentum mattis pellentesque id.',
        user_id: 3

    },
    {
        title: 'MVC and YOU!',
        post_text: 'Vestibulum lorem sed risus ultricies tristique. Sed risus ultricies tristique nulla aliquet enim tortor. Enim nunc faucibus a pellentesque sit. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Porta non pulvinar neque laoreet suspendisse interdum. Nec dui nunc mattis enim ut tellus elementum.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;