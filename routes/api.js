var express = require('express');
var blogController = require('./blog/blog.controller');
var router = express.Router();


router.post('/posts', blogController.create);

router.get('/posts', blogController.index);

router.put('/posts/:id', blogController.update);

module.exports = router;
