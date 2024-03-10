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
exports.updateCourseDetails = exports.createCourse = exports.getCourseById = exports.getAllCourses = void 0;
const courseModel_1 = __importDefault(require("../models/courseModel"));
// ...
// Get all courses
const getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield courseModel_1.default.findAll();
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch courses',
            errorMessage: error });
    }
});
exports.getAllCourses = getAllCourses;
// 
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield courseModel_1.default.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ status: 'Course not found' });
        }
        res.status(200).json(course);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
});
exports.getCourseById = getCourseById;
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, maxSeats, startDate, instructorId, duration, category, imageUrl } = req.body;
        const course = yield courseModel_1.default.create({ name, maxSeats, startDate, instructorId, duration, category, imageUrl });
        res.status(201).json(course);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to create course', errorMessage: error });
    }
});
exports.createCourse = createCourse;
const updateCourseDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const { name, maxSeats, startDate, instructorId, duration, category, imageUrl } = req.body;
        const [numberOfAffectedRows, affectedRows] = yield courseModel_1.default.update({ name, maxSeats, startDate, instructorId, duration, category, imageUrl }, {
            where: { id: courseId },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            return res.status(404).json({ status: 'Course not found' });
        }
        const updatedCourse = affectedRows[0];
        res.status(200).json(updatedCourse);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to update course details', errorMessage: error });
    }
});
exports.updateCourseDetails = updateCourseDetails;
