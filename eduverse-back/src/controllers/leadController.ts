import { Request, Response } from 'express';
import Lead from '../models/leadModel';
import { Op } from 'sequelize';



export const getAllLeads = async (req: Request, res: Response) => {
    try {
        const leads = await Lead.findAll();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch leads', errorMessage: error });
    }
};

export const registerForCourse = async (req: Request, res: Response) => {
    try {
      const { name, email, phoneNumber, linkedInProfile, courseId, status } = req.body;

  
      const lead = await Lead.create({
        name,
        email,
        phoneNumber,
        linkedInProfile,
        courseId,
        status,
      });
  
      res.status(201).json(lead);
    } catch (error) {
      res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
  };



export const updateLeadStatus = async (req: Request, res: Response) => {
    try {
        const { leadId } = req.params;
        const { status } = req.body;

        const [numberOfAffectedRows, affectedRows] = await Lead.update(
            { status: status },
            {
                where: { id: leadId },
                returning: true,
            }
        );

        if (numberOfAffectedRows === 0) {
            return res.status(404).json({ error: 'Lead not found' });
        }

        const updatedLead = affectedRows[0];
        res.status(200).json(updatedLead);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
};

export const searchLeads = async (req: Request, res: Response) => {
        try {
            const { name, email } = req.query;
    
            const leads = await Lead.findAll({
                where: {
                    ...(name ? { name: { [Op.iLike]: `%${name}%` } } : {}),
                    ...(email ? { email: { [Op.iLike]: `%${email}%` } } : {}),
                },
            });
    
            res.status(200).json(leads);
        } catch (error) {
            res.status(500).json({ status: 'Failed to fetch leads', errorMessage: error });
        }
    };
