import express from 'express';
import * as commentController from '../controllers/commentController';

const router = express.Router();

router.post("/add", commentController.addComment);


export default router;