import express from 'express';
import * as commentController from '../controllers/commentController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authenticate)

router.get("/", commentController.getAllComments);

router.get("/:leadId", commentController.getLeadComments);

router.post("/add", commentController.addComment);


export default router;