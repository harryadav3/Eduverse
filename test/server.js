"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var app_1 = require("./src/app");
var dotenv_1 = require("dotenv");
dotenv_1.default.config({ path: "./local.env" });
var PORT = process.env.PORT || 3000;
var connectionString = process.env.DATABASE_URL;
var pool = new pg_1.Pool({
    connectionString: connectionString,
});
// Connect to the PostgreSQL database
pool
    .connect()
    .then(function () {
    console.log("Connected to PostgreSQL database");
})
    .catch(function (error) {
    console.error("Error connecting to PostgreSQL database:", error);
});
// Start the server
app_1.default.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
