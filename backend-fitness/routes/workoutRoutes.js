import express from "express";
const router = express.Router();
import {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get("/", protect, getAllWorkouts);
router.get("/:_id", protect, getWorkout);
router.post("/", protect, createWorkout);
router.patch("/:_id", protect, updateWorkout);
router.delete("/:_id", protect, deleteWorkout);

export default router;
