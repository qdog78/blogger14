
const sequelize = require('../config/connection');
//TO DO: update constants to match the model name exports, make sure the path below is where the models are
const { User, Blog, Comment } = require('../models');

// TO DO: make sure these match the filenames in seeds/
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const createdBlogs = [];

  for (const blog of blogData) {
    const createdBlog = await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    createdBlogs.push(createdBlog);
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    
      
      blog_id: createdBlogs[Math.floor(Math.random() * createdBlogs.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
