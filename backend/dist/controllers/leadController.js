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
exports.searchLeads = exports.updateLeadStatus = exports.getAllRegisterCourse = exports.deleteCourse = exports.registerForCourse = exports.getAllLeads = void 0;
const leadModel_1 = __importDefault(require("../models/leadModel"));
const sequelize_1 = require("sequelize");
const courseModel_1 = __importDefault(require("../models/courseModel"));
const courseRegistration_1 = __importDefault(require("./../models/courseRegistration"));
const instructorModel_1 = __importDefault(require("../models/instructorModel"));
const getAllLeads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield leadModel_1.default.findAll();
        res.status(200).json(leads);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch leads', errorMessage: error });
    }
});
exports.getAllLeads = getAllLeads;
const registerForCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { leadId, courseId, status } = req.body;
        const lead = yield leadModel_1.default.findByPk(leadId);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        const course = yield courseModel_1.default.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        const courseRegistration = yield courseRegistration_1.default.create({
            leadId,
            courseId,
            status,
        });
        res.status(201).json({ status: 'Succesful',
            lead, courseRegistration });
    }
    catch (error) {
        res
            .status(500)
            .json({ status: "Failed to register for course", errorMessage: error });
    }
});
exports.registerForCourse = registerForCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield courseRegistration_1.default.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        yield course.destroy();
        res.status(200).json({ status: 'Course deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to delete course', errorMessage: error });
    }
});
exports.deleteCourse = deleteCourse;
const getAllRegisterCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { leadId } = req.params;
        const registerCourse = yield courseRegistration_1.default.findAll({
            where: { leadId },
        });
        const courseIds = registerCourse.map((course) => course.courseId);
        const courses = yield courseModel_1.default.findAll({
            where: { id: courseIds },
            include: {
                model: instructorModel_1.default,
                attributes: ['name'],
            },
        });
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({ status: "Failed to fetch register course", errorMessage: error });
    }
});
exports.getAllRegisterCourse = getAllRegisterCourse;
const updateLeadStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { leadId } = req.params;
        const { status } = req.body;
        const [numberOfAffectedRows, affectedRows] = yield leadModel_1.default.update({ status: status }, {
            where: { id: leadId },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        const updatedLead = affectedRows[0];
        res.status(200).json(updatedLead);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
});
exports.updateLeadStatus = updateLeadStatus;
// /// create lead
// export const createLead = async (req: Request, res: Response) => {
//     try {
//         const { name, email, phoneNumber, linkedInProfile, status, courseId, password } = req.body;
//         const lead = await Lead.create({ name, email, phoneNumber, linkedInProfile, status, courseId, password });
//         res.status(201).json(lead);
//     } catch (error) {
//         res.status(500).json({ status: 'Failed to create lead', errorMessage: error });
//     }
// };
const searchLeads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("inside the serarch lead ", req.query);
        const { name, email } = req.query;
        console.log("name", name, "email", email);
        const leads = yield leadModel_1.default.findAll({
            where: Object.assign(Object.assign({}, (name ? { name: { [sequelize_1.Op.iLike]: `%${name}%` } } : {})), (email ? { email: { [sequelize_1.Op.iLike]: `%${email}%` } } : {})),
        });
        console.log("leads", leads);
        res.status(200).json(leads);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch leads', errorMessage: error });
    }
});
exports.searchLeads = searchLeads;
