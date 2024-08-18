import { useEffect, useState } from "react";
import IWorkout from "../interfaces";
import Workout from "../components/Workout";
import Form from "../components/Form";
import { useGetAllWorkoutsMutation } from "../slices/workoutSlice.tsx";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState<null | Array<IWorkout>>(null);

  const [getAllWorkoutsAPICall, { isLoading }] = useGetAllWorkoutsMutation();

  const fetchWorkouts = async () => {
    try {
      const res = await getAllWorkoutsAPICall(null).unwrap();
      setWorkouts(res);
      console.log(res);
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
      <>{isLoading ? loading() : loaded()}</>
    </div>
  );
};

export default Dashboard;
