import { Request, Response, NextFunction } from 'express';

export const authorizeInstructor = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'instructor') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};

export const authorizeLead = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'lead') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};