import express from 'express';

import {getPosts, createPost} from '../controllers/posts.js'
const router = express.Router();

//It's reached by going to localhost:5000/posts
router.get('/',getPosts);
router.get('/',createPost);



export default router;