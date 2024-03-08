import { Request, Response } from 'express';
import  Instructor  from '../models/instructorModel';

// Get all instructors
export const getAllInstructors = async (req: Request, res: Response) => {
    try {
        const instructors = await Instructor.findAll();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch instructors', errorMessage: error });
    }
};

// Get instructor by ID
export const getInstructorById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const instructor = await Instructor.findByPk(id);

        if (!instructor) {
            return res.status(404).json({ status: 'Instructor not found' });
        }

        res.status(200).json(instructor);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch instructor', errorMessage: error });
    }
};

// Create instructor
export const createInstructor = async (req: Request, res: Response) => {
    try {
        const { name, email, bio } = req.body;
        const instructor = await Instructor.create({ name, email, bio });
        res.status(201).json(instructor);
    } catch (error) {
        res.status(500).json({ status: 'Failed to create instructor', errorMessage: error });
    }
};

// Update instructor
export const updateInstructor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email, bio } = req.body;

        const [numberOfAffectedRows, affectedRows] = await Instructor.update(
            { name, email, bio },
            {
                where: { id: id },
                returning: true,
            }
        );

        if (numberOfAffectedRows === 0) {
            return res.status(404).json({ status: 'Instructor not found' });
        }

        const updatedInstructor = affectedRows[0];
        res.status(200).json(updatedInstructor);
    } catch (error) {
        res.status(500).json({ status: 'Failed to update instructor', errorMessage: error });
    }
};

// // Update instructor
// export const updateInstructor = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const { name, email, bio } = req.body;
//         const instructor = await Instructor.findByPk(id);

//         if (!instructor) {
//             return res.status(404).json({ error: 'Instructor not found' });
//         }

//         instructor.name = name;
//         instructor.email = email;
//         instructor.bio = bio;
//         await instructor.save();

//         res.status(200).json(instructor);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update instructor' });
//     }
// };