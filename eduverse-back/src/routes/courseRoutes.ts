import express from 'express';

import { CourseController } from '../controllers/courseController';

const router = express.Router();

const courseController = new CourseController();

router.get('/', courseController.getAllCourses);

router.get('/:id', courseController.getCourseById);

router.post('/', courseController.createCourse);

router.put('/:id', courseController.updateCourse);


export default router;