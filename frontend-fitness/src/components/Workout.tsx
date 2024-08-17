import { useState } from "react";
import IWorkout from "../interfaces";
import { useDeleteWorkoutMutation } from "../slices/workoutSlice.tsx";

interface IParameter {
  workout: IWorkout;
}
const Workout = ({ workout }: IParameter) => {
  const [error, setError] = useState<string | null>(null);

  const workoutTitle = workout.title;
  const workoutReps = workout.reps;
  const workoutLoad = workout.load;
  const workoutTimestamp = workout.createdAt;
  const workout_id = workout._id;

  const [deleteWorkoutAPICall] = useDeleteWorkoutMutation();

  const handleDeleteClick = async () => {
    console.log("deleted");
    try {
      await deleteWorkoutAPICall(workout_id).unwrap();
    } catch (error) {
      setError("Cant delete");
      console.log(error);
    }

    // location.reload(); //refresh page so see that deleted item is gone
  };

  return (
    <div>
      <h1>{workoutTitle}</h1>
      <p>Reps: {workoutReps}</p>
      <p>Load: {workoutLoad}</p>
      <p>{workoutTimestamp}</p>
      <button type="button" onClick={handleDeleteClick}>
        DELETE
      </button>
      {error}
    </div>
  );
};

export default Workout;
