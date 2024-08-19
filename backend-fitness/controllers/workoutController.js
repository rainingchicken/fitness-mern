import asyncHandler from "express-async-handler";
import Workout from "../models/workoutModel.js";
import User from "../models/userModel.js";

const getAllWorkouts = asyncHandler(async (req, res) => {
  // res.json({ message: "GET all workouts" });
  const user = req.user.id;

  try {
    const allWorkouts = await Workout.find({ user }).sort({ createdAt: -1 });
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(404).json({ error: `Something went wrong ${error.message}` });
  }
});

const getWorkout = asyncHandler(async (req, res) => {
  //   res.json({ message: "GET this workout" });
  const _id = req.params;
  try {
    const thisWorkout = await Workout.findById(_id);
    res.status(200).json(thisWorkout);
  } catch (error) {
    res.status(404).json({ error: `Workout not found ${error.message}` });
  }
});

const createWorkout = asyncHandler(async (req, res) => {
  //   res.json({ message: "POST new workout" });
  const { title, sets, reps } = req.body;
  const user = req.user.id;
  // console.log(req.body);
  try {
    const newWorkout = await Workout.create({ title, sets, reps, user });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

const updateWorkout = asyncHandler(async (req, res) => {
  //   res.json({ message: "PATCH this workout" });
  const _id = req.params;
  try {
    const user = await User.findById(req.user.id);

    //check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // console.log(req.user, user.id);

    const updatedWorkout = await Workout.findByIdAndUpdate(_id, req.body);
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

const deleteWorkout = asyncHandler(async (req, res) => {
  //   res.json({ message: "DELETE this workout" });
  const _id = req.params;
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(_id);
    res.status(200).json(deletedWorkout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
