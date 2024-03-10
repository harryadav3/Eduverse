"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const instructorRoutes_1 = __importDefault(require("./routes/instructorRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const leadRoutes_1 = __importDefault(require("./routes/leadRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/", (req, res, next) => {
    res.json({ message: "Welcome to the backend!" });
});
app.use('/api/auth/', authRoutes_1.default);
app.use('/api/instructors', instructorRoutes_1.default);
app.use('/api/courses', courseRoutes_1.default);
app.use('/api/leads', leadRoutes_1.default);
app.use('/api/comments', commentRoutes_1.default);
// Define a simple route to return "Hello, world!"
app.get("/", (req, res) => {
    res.send("Hello, from the terminal");
});
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found!' });
});
exports.default = app;
