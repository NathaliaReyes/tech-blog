const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    //Set to cascade so that if a user is deleted, all of their posts are deleted as well
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    //Set to cascade so that if a post is deleted, all of its comments are deleted as well
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// This is a many-to-one relationship between the user and comment models
// It is added so that we can easily access a user's comments if we want to
User.hasMany(Comment, {
    foreignKey: 'user_id',
    //Set to cascade so that if a user is deleted, all of their comments are deleted as well
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };