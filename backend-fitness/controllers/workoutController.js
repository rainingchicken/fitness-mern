import asyncHandler from "express-async-handler";
import Workout from "../models/workoutModel.js";
import User from "../models/userModel.js";

// @desc    get all of user's workouts
// @route   GET /api/workouts
// @access  Private
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

// @desc    get a workout
// @route   GET /api/workouts/:_id
// @access  Public
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

// @desc   create a workout with user's _id
// @route   POST /api/workouts
// @access  Private
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

// @desc    update a workouts
// @route   PATCH /api/workouts/_:id
// @access  Private
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

// @desc   delete workouts
// @route   DELETE /api/workouts/:_id
// @access  Private
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
