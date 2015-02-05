var mongoose = require('mongoose');

blogSchema = mongoose.Schema({
    body: String,
    createdAt: {type: Date, default: Date.now},
    title: String,
    tags: [String]
});

module.exports= mongoose.model('Blog', blogSchema);
