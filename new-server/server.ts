import express from "express";
import { Pool } from "pg";
import app from "./src/app";

import   dotenv from "dotenv";

dotenv.config({ path: "./local.env" });

const PORT = process.env.PORT || 3000;


const connectionString = process.env.DATABASE_URL;


const pool = new Pool({
  connectionString,
});


// Connect to the PostgreSQL database
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL database:", error);
  });



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
