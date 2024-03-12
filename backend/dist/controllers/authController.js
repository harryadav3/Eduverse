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
exports.deleteUser = exports.login = exports.registerLead = exports.registerInstructor = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const instructorModel_1 = __importDefault(require("../models/instructorModel"));
const leadModel_1 = __importDefault(require("../models/leadModel"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/../local.env' });
// console.log("JWTI Secrte is = " , process.env.JWT_SECRET);
const jwtSecret = process.env.JWT_SECRET || 'secret-key';
const registerInstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, bio, imageUrl } = req.body;
        const instructor = yield instructorModel_1.default.create({ name, email, password, bio, imageUrl });
        const token = jsonwebtoken_1.default.sign({ userId: instructor.id, role: 'instructor' }, jwtSecret, { expiresIn: '30d' });
        res.status(201).json({ status: "successful", user: {
                id: instructor.id,
                name: instructor.name,
                email: instructor.email,
                // imageUrl: user.imageUrl,
                role: 'instructor'
            }, token });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to register instructor', errorMessage: error });
    }
});
exports.registerInstructor = registerInstructor;
const registerLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, phoneNumber, imageUrl, status = 'Waitlist' } = req.body;
        const lead = yield leadModel_1.default.create({ name, email, password, phoneNumber, imageUrl, status });
        const token = jsonwebtoken_1.default.sign({ userId: lead.id, role: 'lead' }, jwtSecret, { expiresIn: '30d' });
        res.status(201).json({ status: "successful", user: {
                id: lead.id,
                name: lead.name,
                email: lead.email,
                imageUrl: lead.imageUrl,
                status: lead.status,
                role: 'lead'
            },
            token
        });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to register lead', errorMessage: error });
    }
});
exports.registerLead = registerLead;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, role } = req.body;
        let user;
        if (role === 'instructor') {
            user = yield instructorModel_1.default.findOne({ where: { email } });
        }
        else if (role === 'lead') {
            user = yield leadModel_1.default.findOne({ where: { email } });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordValid = yield user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role }, jwtSecret, { expiresIn: '30d' });
        res.status(200).json({
            status: "Succuccesful login",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl,
                status: user.status,
                role: role
            },
            token
        });
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to authenticate user', errorMesage: error });
    }
});
exports.login = login;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, role } = req.params;
        let user;
        if (role === 'instructor') {
            user = yield instructorModel_1.default.findByPk(id);
        }
        else if (role === 'lead') {
            user = yield leadModel_1.default.findByPk(id);
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        yield user.destroy();
        res.status(204).json({ status: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to delete user', errorMessage: error });
    }
});
exports.deleteUser = deleteUser;
