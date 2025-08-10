import express from 'express';
import {
    createPost,
    deletePost,
    getAllPosts,
    getPostById,
    updatePost
} from '../controller/PostController.js';

const router = express.Router();

// CRUD routes
router.post('/createPost', createPost); 
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/getAllPosts', getAllPosts);
router.get('/getPost/:id', getPostById);

export default router;
