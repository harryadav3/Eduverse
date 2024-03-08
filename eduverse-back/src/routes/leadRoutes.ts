import express from 'express';
import * as leadController from '../controllers/leadController';

const router = express.Router();

// Register for a course
router.post('/register', leadController.registerForCourse);

// Update lead status
router.put('/:leadId', leadController.updateLeadStatus);

// Search leads
router.get('/search', leadController.searchLeads);

export default router;