import { FormEvent, useState } from "react";
import { useCreateWorkoutMutation } from "../slices/workoutSlice.tsx";
import { useSelector } from "react-redux";

const Form = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  const [workout, setWorkout] = useState({
    title: "",
    sets: 1,
    reps: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const [createWorkoutAPICall] = useCreateWorkoutMutation();

  const handleTitleChange = (e: FormEvent) => {
    setWorkout((state) => ({
      ...state,
      title: (e.target as HTMLInputElement).value,
    }));
  };
  const handleRepsChange = (e: FormEvent) => {
    setWorkout((state) => ({
      ...state,
      reps: +(e.target as HTMLInputElement).value,
    }));
  };
  const handleSetsChange = (e: FormEvent) => {
    setWorkout((state) => ({
      ...state,
      sets: +(e.target as HTMLInputElement).value,
    }));
  };

  const handleSubmit = async () => {
    const newWorkout = {
      title: workout.title,
      sets: workout.sets,
      reps: workout.reps,
      user: userInfo,
    };
    console.log("submitted");
    try {
      const res = await createWorkoutAPICall(newWorkout).unwrap();
      console.log(res);
      setWorkout(res);

      // setWorkout(res.json());
    } catch (error) {
      setError("Cant submit");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Workout Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="workoutTitle">Workout Title: </label>
        <input id="workoutTitle" type="text" onChange={handleTitleChange} />
        <label htmlFor="workoutSets">Sets: </label>
        <input id="workoutSets" type="number" onChange={handleSetsChange} />
        <label htmlFor="workoutReps">Reps: </label>
        <input id="workoutReps" type="number" onChange={handleRepsChange} />
        <button type="submit">SUBMIT</button>
        <p className="error">{error}</p>
      </form>
    </div>
  );
};

export default Form;
