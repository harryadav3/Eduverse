import express from 'express';
import * as commentController from '../controllers/commentController';

const router = express.Router();

router.get("/", commentController.getAllComments);

router.get("/:leadId", commentController.getLeadComments);

router.post("/add", commentController.addComment);


export default router;