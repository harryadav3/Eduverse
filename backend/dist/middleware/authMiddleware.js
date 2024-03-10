"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const instructorModel_1 = __importDefault(require("../models/instructorModel"));
const leadModel_1 = __importDefault(require("../models/leadModel"));
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Invalid token format' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        const { userId, role } = decoded;
        let user;
        if (role === 'instructor') {
            user = yield instructorModel_1.default.findByPk(userId);
        }
        else if (role === 'lead') {
            user = yield leadModel_1.default.findByPk(userId);
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});
exports.authenticate = authenticate;
