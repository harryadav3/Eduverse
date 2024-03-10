import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import instructorRoutes from "./routes/instructorRoutes";
import courseRoutes from "./routes/courseRoutes";
import leadRoutes from "./routes/leadRoutes";
import commentRoutes from "./routes/commentRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/auth/', authRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/comments', commentRoutes);



// Define a simple route to return "Hello, world!"
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, from the terminal");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({message : 'Route not found!'}) 
});

export default app;