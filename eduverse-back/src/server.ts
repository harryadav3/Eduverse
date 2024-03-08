import { Pool } from 'pg';
import app from './app';
import dotenv from 'dotenv';
import { syncModels } from './sync'; // Import the syncModels function

// dotenv.config({ path: './../local.env' });
dotenv.config({ path: __dirname + '/../local.env' });

const PORT = process.env.PORT || 3000;
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});
  
// Connect to the PostgreSQL database
pool
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    syncModels(); // Call the syncModels function
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});