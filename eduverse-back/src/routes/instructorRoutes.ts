
import express from 'express';
import { InstructorController } from '../controllers/instructorController';

const router = express.Router();

const instructorController = new InstructorController();

router.get('/', instructorController.getAllInstructors);

router.get('/:id', instructorController.getInstructorById);

router.post('/', instructorController.createInstructor);

router.put('/:id', instructorController.updateInstructor);


export default router;


