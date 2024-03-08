import { Request, Response } from 'express';
import { Instructor } from '../models/instructor'; // Assuming you have an 'Instructor' model

// Get all instructors
export const getAllInstructors = async (req: Request, res: Response) => {
  try {
    const instructors = await Instructor.findAll();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch instructors' });
  }
};

// Get instructor by ID
export const getInstructorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const instructor = await Instructor.findByPk(id);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch instructor' });
  }
};

// Create instructor
export const createInstructor = async (req: Request, res: Response) => {
  try {
    const { name, email, bio } = req.body;
    const instructor = await Instructor.create({ name, email, bio });
    res.status(201).json(instructor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create instructor' });
  }
};

// Update instructor
export const updateInstructor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;
    const instructor = await Instructor.findByPk(id);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    instructor.name = name || instructor.name;
    instructor.email = email || instructor.email;
    instructor.bio = bio || instructor.bio;
    await instructor.save();

    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update instructor' });
  }
};