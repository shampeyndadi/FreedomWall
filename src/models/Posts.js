const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    User: String,
    Post: String,
    Date: Date
})

const Post = mongoose.model('posts', PostSchema);

module.exports = Post