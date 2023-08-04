// Make sure these match the names of the models, add relationships below as needed

const User = require('./User');
const Blog = require('./Bite');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Blog, Comment };