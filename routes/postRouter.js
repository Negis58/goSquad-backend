const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/post', postController.getPost);
router.get('/post/:id', postController.getPostById);
router.post('/post', postController.createPost);
router.put('/post/:id', postController.updatePost);


module.exports = router;