import { Request, Response } from 'express';
import { Lead } from '../models/lead'; // Assuming you have a 'Lead' model

// Course registration API (A user can apply for a course by sharing their name, email, phone number, and LinkedIn profile)
export const registerForCourse = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, linkedInProfile, courseId } = req.body;
    const lead = await Lead.create({ name, email, phoneNumber, linkedInProfile, courseId });
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register for course' });
  }
};

// Lead update API (Instructor can change the status of the lead (Accept / Reject / Waitlist))
export const updateLeadStatus = async (req: Request, res: Response) => {
  try {
    const { leadId } = req.params;
    const { status } = req.body;
    const lead = await Lead.findByPk(leadId);

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    lead.status = status;
    await lead.save();

    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lead status' });
  }
};

// Lead search API (Instructor can search leads by name or email)
export const searchLeads = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.query;
    const leads = await Lead.findAll({
      where: {
        ...(name && { name }),
        ...(email && { email }),
      },
    });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search leads' });
  }
};