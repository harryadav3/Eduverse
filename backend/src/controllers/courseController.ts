import { Request, Response } from 'express';
import  Course  from '../models/courseModel';

// ...

// Get all courses
export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);

    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch courses',
    errorMessage: error });
    }
};





// 

export const getCourseById = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const course = await Course.findByPk(courseId);

        if (!course) {
            return res.status(404).json({ status: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
};

export const createCourse = async (req: Request, res: Response) => {
    try {
        const { name, maxSeats, startDate, instructorId, duration, category, imageUrl } = req.body;
        const course = await Course.create({ name, maxSeats, startDate, instructorId, duration, category, imageUrl });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ status: 'Failed to create course', errorMessage: error });
    }
};

export const updateCourseDetails = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const { name, maxSeats, startDate, instructorId, duration, category, imageUrl } = req.body;
        
        const [numberOfAffectedRows, affectedRows] = await Course.update(
            { name, maxSeats, startDate, instructorId, duration, category, imageUrl },
            {
                where: { id: courseId },
                returning: true,
            }
        );

        if (numberOfAffectedRows === 0) {
            return res.status(404).json({ status: 'Course not found' });
        }

        const updatedCourse = affectedRows[0];
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ status: 'Failed to update course details', errorMessage: error });
    }
};