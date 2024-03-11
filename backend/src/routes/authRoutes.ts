
import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();


// Register a new instructor
router.post('/register/instructor', authController.registerInstructor);

// Register a new lead

router.post('/register/lead', authController.registerLead);

// Login

router.post('/login', authController.login);

router.delete('/delete/:role/:id', authController.deleteUser);
export default router;