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
exports.addComment = exports.getLeadComments = exports.getAllComments = void 0;
const commentModel_1 = __importDefault(require("../models/commentModel"));
const getAllComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield commentModel_1.default.findAll();
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch comments', errorMessage: error });
    }
});
exports.getAllComments = getAllComments;
const getLeadComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { leadId } = req.params;
        const comments = yield commentModel_1.default.findAll({ where: { leadId } });
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch comments', errorMessage: error });
    }
});
exports.getLeadComments = getLeadComments;
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { leadId, instructorId, comment } = req.body;
        const newComment = yield commentModel_1.default.create({ leadId, instructorId, comment });
        res.status(201).json(newComment);
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to fetch course', errorMessage: error });
    }
});
exports.addComment = addComment;
