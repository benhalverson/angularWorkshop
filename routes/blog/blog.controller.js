var Blog = require('./blog.model');


// /api/posts/
exports.index = function(req, res){
    Blog.find(req.query,function(err, posts){
        if(err) return handleError(err, res);
        res.json(posts);   
    })
}

exports.sanitize = function(req, res, next){
    if(req.body._id){
        delete req.body._id ;
    }
    next();
}

// POST --> /api/posts/
exports.create = function(req, res){
    console.log('here in create');
    var blog = new Blog(req.body);
    blog.save(function(err, post){
        if(err) return handleError(err, res);
        res.json(post);
    })
}


// PUT --> /api/posts/:id <-- id of the post to update
exports.update = function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return handleError(err, res);
        res.json(post);   
    })
}

function handleError(err, res){
    return res.status(500).json(err);
}