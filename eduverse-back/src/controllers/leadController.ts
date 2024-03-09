import { Request, Response } from 'express';
import Lead from '../models/leadModel';
import { Op } from 'sequelize';
import Course from '../models/courseModel';
import CourseRegistration from "./../models/courseRegistration";


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
        const { leadId, courseId, status } = req.body;

        const lead = await Lead.findByPk(leadId);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }


        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const courseRegistration = await CourseRegistration.create({
            leadId,
            courseId,
            status,
        });

        res.status(201).json({ status: 'Succesful',
         lead, courseRegistration });
    } catch (error) {
        res
            .status(500)
            .json({ status: "Failed to register for course", errorMessage: error });
    }
};

export const getAllRegisterCourse = async (req: Request, res: Response) => {
    try {
        const { leadId } = req.params;
        const registerCourse = await CourseRegistration.findAll({
            where: { leadId },
        });
        res.status(200).json(registerCourse);
    } catch (error) {
        res.status(500).json({ status: "Failed to fetch register course", errorMessage: error });
    }
}


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

// /// create lead
// export const createLead = async (req: Request, res: Response) => {
//     try {
//         const { name, email, phoneNumber, linkedInProfile, status, courseId, password } = req.body;
//         const lead = await Lead.create({ name, email, phoneNumber, linkedInProfile, status, courseId, password });
//         res.status(201).json(lead);
//     } catch (error) {
//         res.status(500).json({ status: 'Failed to create lead', errorMessage: error });
//     }
// };
export const searchLeads = async (req: Request, res: Response) => {
    try {

        console.log("inside the serarch lead ", req.query);
        const { name, email } = req.query;

        console.log("name", name, "email", email)

        const leads = await Lead.findAll({
            where: {
                ...(name ? { name: { [Op.iLike]: `%${name}%` } } : {}),
                ...(email ? { email: { [Op.iLike]: `%${email}%` } } : {}),
            },
        });

        console.log("leads", leads);

        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch leads', errorMessage: error });
    }
};

