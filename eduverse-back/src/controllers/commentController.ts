import { Request, Response } from 'express';
import { Lead } from '../models/lead'; // Assuming you have a 'Lead' model
import { Comment } from '../models/comment'; // Assuming you have a 'Comment' model

// Add comment API
export const addComment = async (req: Request, res: Response) => {
  try {
    const { leadId } = req.params;
    const { comment } = req.body;
    const lead = await Lead.findByPk(leadId);

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    const newComment = await Comment.create({ comment, leadId });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};