import express from 'express';
import * as instructorController from '../controllers/instructorController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();


router.use(authenticate)

// Get all instructors
router.get('/', instructorController.getAllInstructors);

// Get an instructor by ID
router.get('/:id', instructorController.getInstructorById);

// Create a new instructor
// router.post('/', instructorController.createInstructor);

// Update an existing instructor
router.put('/:id', instructorController.updateInstructor);

export default router;