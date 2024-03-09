import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Instructor from '../models/instructorModel';
import Lead from '../models/leadModel';
import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../local.env' });

// console.log("JWTI Secrte is = " , process.env.JWT_SECRET);


const jwtSecret = process.env.JWT_SECRET || 'secret-key';

export const registerInstructor = async (req: Request, res: Response) => {
  try {
    const { name, email, password, bio } = req.body;
    const instructor = await Instructor.create({ name, email, password, bio });
    const token = jwt.sign({ userId: instructor.id, role: 'instructor' }, jwtSecret, { expiresIn: '1h' });
    res.status(201).json({ status : "succesful",
    instructor, token });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to register instructor', errorMessage : error });
  }
};

export const registerLead = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber, linkedInProfile, status, courseId } = req.body;
    const lead = await Lead.create({ name, email, password, phoneNumber, linkedInProfile, status, courseId });
    const token = jwt.sign({ userId: lead.id, role: 'lead' }, jwtSecret, { expiresIn: '1h' });
    res.status(201).json({ lead, token });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to register lead', errorMessage : error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    let user;
    if (role === 'instructor') {
      user = await Instructor.findOne({ where: { email } });
    } else if (role === 'lead') {
      user = await Lead.findOne({ where: { email } });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id, role }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ 
      status : "Succuccesful login",
      Jwttoke : token });
  } catch (error) {
    res.status(500).json({ status: 'Failed to authenticate user' ,
  errorMesage: error});
  }
};