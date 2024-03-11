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
    const { name, email, password, bio, imageUrl } = req.body;
    const instructor = await Instructor.create({ name, email, password, bio, imageUrl });
    const token = jwt.sign({ userId: instructor.id, role: 'instructor' }, jwtSecret, { expiresIn: '30d' });
    res.status(201).json({ status : "successful", user: {
      id: instructor.id,
      name: instructor.name,
      email: instructor.email,
      // imageUrl: user.imageUrl,
      role: 'instructor'
    }, token });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to register instructor', errorMessage : error });
  }
};

export const registerLead = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber, imageUrl, status = 'Waitlist' } = req.body;

    const lead = await Lead.create({ name, email, password, phoneNumber, imageUrl, status });
    const token = jwt.sign({ userId: lead.id, role: 'lead' }, jwtSecret, { expiresIn: '30d' });
    res.status(201).json({ status: "successful",   user: {
      id: lead.id,
      name: lead.name,
      email: lead.email,
      imageUrl: lead.imageUrl,
       status: lead.status,
      role: 'lead'
    },
    token  
  });
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

    const token = jwt.sign({ userId: user.id, role }, jwtSecret, { expiresIn: '30d' });
    res.status(200).json({ 
      status : "Succuccesful login",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl,
         status: (user as Lead).status,
        role: role
      },
      token  
    });
  } catch (error) {
    res.status(500).json({ status: 'Failed to authenticate user' , errorMesage: error});
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const user = await Lead.findByPk(id as string);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).json({ status: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'Failed to delete user', errorMessage : error });
  }
}

