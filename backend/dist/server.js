"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const sync_1 = require("./sync"); // Import the syncModels function
// dotenv.config({ path: './../local.env' });
dotenv_1.default.config({ path: __dirname + '/../local.env' });
const PORT = process.env.PORT || 3000;
const connectionString = process.env.DATABASE_URL;
const pool = new pg_1.Pool({
    connectionString,
});
// Connect to the PostgreSQL database
pool
    .connect()
    .then(() => {
    console.log('Connected to PostgreSQL database');
    (0, sync_1.syncModels)(); // Call the syncModels function
})
    .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error);
});
// Start the server
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
