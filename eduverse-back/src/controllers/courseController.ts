import { Request, Response } from 'express';
import { Course } from '../models/course'; // Assuming you have a 'Course' model

// Create course API
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { name, maxSeats, startDate, instructorId } = req.body;
    const course = await Course.create({ name, maxSeats, startDate, instructorId });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

// Update course details API (name, max_seats, start_date, etc.)
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const { name, maxSeats, startDate } = req.body;
    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    course.name = name || course.name;
    course.maxSeats = maxSeats || course.maxSeats;
    course.startDate = startDate || course.startDate;
    await course.save();

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course' });
  }
};