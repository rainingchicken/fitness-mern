// @desc   displays workout title, reps, sets, created time, delete, and edit button
// @route   DELETE /api/workouts
// @route   PATCH /api/workouts
// @access  Private
import { useState } from "react";
import IWorkout from "../interfaces";
import { useDeleteWorkoutMutation } from "../slices/workoutSlice.tsx";
import EditForm from "./EditForm.tsx";

interface IParameter {
  workout: IWorkout;
}
const Workout = ({ workout }: IParameter) => {
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const workoutTitle = workout.title;
  const workoutReps = workout.reps;
  const workoutSets = workout.sets;
  const workoutTimestamp = workout.createdAt
    .toLocaleString("en-US")
    .slice(0, 10);
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

    location.reload(); //refresh page so see that deleted item is gone
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const workoutBoxes = () => {
    return (
      <div className="workout">
        <h1 className="workoutTitle">{workoutTitle}</h1>
        <p className="sets">Sets: {workoutSets}</p>
        <p className="reps">Reps: {workoutReps}</p>
        <p className="date">{workoutTimestamp}</p>
        <button type="button" onClick={handleEdit}>
          EDIT
        </button>{" "}
        <button type="button" onClick={handleDeleteClick}>
          DELETE
        </button>
        <p className="error">{error}</p>
      </div>
    );
  };

  const editMode = () => {
    return <EditForm workout={workout} setEdit={setEdit} />;
  };

  return <>{edit ? editMode() : workoutBoxes()}</>;
};

export default Workout;
