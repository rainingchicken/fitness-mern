import express from "express";
import dotenv from "dotenv";
dotenv.config();
import conn from "./db/conn.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import workoutRoutes from "./routes/workoutRoutes.js";

const port = process.env.PORT || 5000;

conn();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/workouts", workoutRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
