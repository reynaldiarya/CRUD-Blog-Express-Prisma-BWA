const express = require('express'); 
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/PostController.js');


const postRouter = express.Router();    

postRouter.get('/posts', getPosts);
postRouter.post('/posts', createPost);
postRouter.put('/posts/:id', updatePost);
postRouter.delete('/posts/:id', deletePost);
module.exports = postRouter; // Export the router to be used in the main app file