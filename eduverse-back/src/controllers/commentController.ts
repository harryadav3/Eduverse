import { Request, Response } from 'express';
import Comment  from '../models/commentModel';

export const addComment = async (req: Request, res: Response) => {
    try {
        const { leadId, instructorId, comment } = req.body;
        const newComment = await Comment.create({ leadId, instructorId, comment });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
};