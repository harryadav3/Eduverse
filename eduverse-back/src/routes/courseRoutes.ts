import express from 'express';
import * as courseController from '../controllers/courseController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authenticate)
// Get all courses
router.get('/', courseController.getAllCourses);

// Get a course by ID
router.get('/:courseId', courseController.getCourseById);

// Create a new course
router.post('/create', courseController.createCourse);

// Update an existing course
router.put('/:courseId', courseController.updateCourseDetails);

export default router;