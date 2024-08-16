import express from "express";
const router = express.Router();
import {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

router.get("/", getAllWorkouts);
router.get("/:_id", getWorkout);
router.post("/", createWorkout);
router.patch("/:_id", updateWorkout);
router.delete("/:_id", deleteWorkout);

export default router;
