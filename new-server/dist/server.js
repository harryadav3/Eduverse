"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// PostgreSQL database connection
const pool = new pg_1.Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.PORT),
});
// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    }
    else {
        console.log('Connected to PostgreSQL database at:', process.env.PGHOST);
    }
});
// Define your routes and APIs here
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
