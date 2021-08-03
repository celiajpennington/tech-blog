const { Model } = require('sequelize/types');
const Comments = require('./Comments');
const Post = require('./Post');
const User = require('./User');


User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
  });
  User.hasMany (Comments, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
  });
Comments.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });
    Model.exports = {User, Post, Comments};