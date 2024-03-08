import express from 'express';
import * as courseController from '../controllers/courseController';

const router = express.Router();

// Get all courses
router.get('/', courseController.getAllCourses);

// Get a course by ID
router.get('/:id', courseController.getCourseById);

// Create a new course
router.post('/', courseController.createCourse);

// Update an existing course
router.put('/:id', courseController.updateCourseDetails);

export default router;