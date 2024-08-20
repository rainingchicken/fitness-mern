// @desc    editmode, update the clicked workout
// @route   PATCH /api/workouts/:_id
// @access  Private
import { FormEvent, useState } from "react";
import { useUpdateWorkoutMutation } from "../slices/workoutSlice.tsx";
import { useSelector } from "react-redux";
import IWorkout from "../interfaces.tsx";

interface IParams {
  workout: IWorkout;
  setEdit: Function;
}

const EditForm = ({ workout, setEdit }: IParams) => {
  const { userInfo } = useSelector((state: any) => state.auth);

  const [currentWorkout, setCurrentWorkout] = useState({
    title: workout.title,
    sets: workout.sets,
    reps: workout.reps,
  });
  const [error, setError] = useState<string | null>(null);

  const [updateWorkoutAPICall] = useUpdateWorkoutMutation();

  const handleTitleChange = (e: FormEvent) => {
    setCurrentWorkout((state) => ({
      ...state,
      title: (e.target as HTMLInputElement).value,
    }));
  };
  const handleRepsChange = (e: FormEvent) => {
    setCurrentWorkout((state) => ({
      ...state,
      reps: +(e.target as HTMLInputElement).value,
    }));
  };
  const handleSetsChange = (e: FormEvent) => {
    setCurrentWorkout((state) => ({
      ...state,
      sets: +(e.target as HTMLInputElement).value,
    }));
  };

  const handleSubmit = async () => {
    const newWorkout = {
      title: currentWorkout.title,
      sets: currentWorkout.sets,
      reps: currentWorkout.reps,
      user: userInfo,
    };
    console.log("saved");
    try {
      const res = await updateWorkoutAPICall({
        id: workout._id,
        data: newWorkout,
      }).unwrap();
      //   console.log(res);
      setCurrentWorkout(res);

      // setWorkout(res.json());
    } catch (error) {
      setError("Cant update");
      console.log(error);
    }
    setEdit(false);
  };

  return (
    <div>
      <h1>Add New Workout Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="workoutTitle">Workout Title</label>
        <input
          id="workoutTitle"
          type="text"
          onChange={handleTitleChange}
          value={currentWorkout.title}
        />
        <label htmlFor="workoutSets">Sets</label>
        <input
          id="workoutSets"
          type="number"
          onChange={handleSetsChange}
          value={currentWorkout.sets}
        />
        <label htmlFor="workoutReps">Reps</label>
        <input
          id="workoutReps"
          type="number"
          onChange={handleRepsChange}
          value={currentWorkout.reps}
        />
        <button type="submit">SAVE</button>
        <p className="error">{error}</p>
      </form>
    </div>
  );
};

export default EditForm;
