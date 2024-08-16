import { useEffect, useState } from "react";
import IWorkout from "../interfaces";
import Workout from "../components/Workout";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAllWorkoutsMutation } from "../slices/workoutSlice.js";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [workouts, setWorkouts] = useState<null | Array<IWorkout>>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [getAllWorkoutsAPICall, { isLoading }] = useGetAllWorkoutsMutation();

  const fetchWorkouts = async () => {
    try {
      const res = await getAllWorkoutsAPICall().unwrap();
      setWorkouts(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  //   return <div>{workouts ? console.log("ya") : console.log("no")}</div>;
  const loaded = () => {
    return (
      <>
        {workouts &&
          workouts.map((workout: IWorkout) => (
            <Workout key={workout._id} workout={workout} />
          ))}
      </>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <h1>Home</h1>
      <Form />
      <>{workouts ? loaded() : loading()}</>
    </div>
  );
};

export default Dashboard;
