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
exports.updateInstructor = exports.getInstructorById = exports.getAllInstructors = void 0;
const instructorModel_1 = __importDefault(require("../models/instructorModel"));
// Get all instructors
const getAllInstructors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructors = yield instructorModel_1.default.findAll();
        res.status(200).json(instructors);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch instructors', errorMessage: error });
    }
});
exports.getAllInstructors = getAllInstructors;
// Get instructor by ID
const getInstructorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const instructor = yield instructorModel_1.default.findByPk(id);
        if (!instructor) {
            return res.status(404).json({ status: 'Instructor not found' });
        }
        res.status(200).json(instructor);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch instructor', errorMessage: error });
    }
});
exports.getInstructorById = getInstructorById;
// // Create instructor
// export const createInstructor = async (req: Request, res: Response) => {
//     try {
//         const { name, email, bio } = req.body;
//         const instructor = await Instructor.create({ name, email, bio });
//         res.status(201).json(instructor);
//     } catch (error) {
//         res.status(500).json({ status: 'Failed to create instructor', errorMessage: error });
//     }
// };
// Update instructor
const updateInstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email, bio } = req.body;
        const [numberOfAffectedRows, affectedRows] = yield instructorModel_1.default.update({ name, email, bio }, {
            where: { id: id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            return res.status(404).json({ status: 'Instructor not found' });
        }
        const updatedInstructor = affectedRows[0];
        res.status(200).json(updatedInstructor);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to update instructor', errorMessage: error });
    }
});
exports.updateInstructor = updateInstructor;
// // Update instructor
// export const updateInstructor = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const { name, email, bio } = req.body;
//         const instructor = await Instructor.findByPk(id);
//         if (!instructor) {
//             return res.status(404).json({ error: 'Instructor not found' });
//         }
//         instructor.name = name;
//         instructor.email = email;
//         instructor.bio = bio;
//         await instructor.save();
//         res.status(200).json(instructor);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update instructor' });
//     }
// };
