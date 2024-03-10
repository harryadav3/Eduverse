"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeLead = exports.authorizeInstructor = void 0;
const authorizeInstructor = (req, res, next) => {
    if (req.user && req.user.role === 'instructor') {
        next();
    }
    else {
        res.status(403).json({ error: 'Forbidden' });
    }
};
exports.authorizeInstructor = authorizeInstructor;
const authorizeLead = (req, res, next) => {
    if (req.user && req.user.role === 'lead') {
        next();
    }
    else {
        res.status(403).json({ error: 'Forbidden' });
    }
};
exports.authorizeLead = authorizeLead;
