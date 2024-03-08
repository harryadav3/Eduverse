import express from 'express';
import { LeadController } from '../controllers/leadController';

const router = express.Router();
const leadController = new LeadController();

// Course registration API (A user can apply for a course by sharing their name, email, phone number, and LinkedIn profile)
router.post('/register', leadController.registerForCourse);

// Lead update API (Instructor can change the status of the lead (Accept / Reject / Waitlist))
router.put('/:leadId', leadController.updateLeadStatus);

// Lead search API (Instructor can search leads by name or email)
router.get('/search', leadController.searchLeads);

export default router;