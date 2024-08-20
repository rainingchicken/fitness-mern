import { useEffect, useState } from "react";
import IWorkout from "../interfaces";
import Workout from "../components/Workout";
import Form from "../components/Form";
import { useGetAllWorkoutsMutation } from "../slices/workoutSlice.tsx";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState<null | Array<IWorkout>>(null);
  const [addMode, setAddMode] = useState(false);
  const [getAllWorkoutsAPICall, { isLoading }] = useGetAllWorkoutsMutation();

  const fetchWorkouts = async () => {
    try {
      const res = await getAllWorkoutsAPICall(null).unwrap();
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

  const handleAddbtn = () => {
    setAddMode(true);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {addMode ? (
        <Form setAddMode={setAddMode} />
      ) : (
        <div className="addBtnDiv">
          <button className="btn" onClick={handleAddbtn}>
            ADD WORKOUT
          </button>
        </div>
      )}

      <>{isLoading ? loading() : loaded()}</>
    </div>
  );
};

export default Dashboard;
