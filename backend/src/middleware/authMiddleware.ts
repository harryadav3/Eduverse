import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Instructor from '../models/instructorModel';
import Lead from '../models/leadModel';

// Extend the Request interface to include a user property
declare global {
  namespace Express {
    interface Request {
      user?: jwt.JwtPayload;
    }
  }
}


const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Invalid token format' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload;
    const { userId, role } = decoded;

    let user;
    if (role === 'instructor') {
      user = await Instructor.findByPk(userId);
    } else if (role === 'lead') {
      user = await Lead.findByPk(userId);
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};