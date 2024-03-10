import { Request, Response } from 'express';
import Comment  from '../models/commentModel';


export const getAllComments = async ( req: Request, res: Response) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch comments', errorMessage: error });
    }
}

export const getLeadComments = async (req: Request, res: Response) => {
    try {
        const { leadId } = req.params;
        const comments = await Comment.findAll({ where: { leadId } });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch comments', errorMessage: error });
    }
}



export const addComment = async (req: Request, res: Response) => {
    try {
        const { leadId, instructorId, comment } = req.body;
        const newComment = await Comment.create({ leadId, instructorId, comment });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
};