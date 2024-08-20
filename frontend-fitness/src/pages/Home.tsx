import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <h1>Daily Warmup</h1>
      <ul>
        <li className="workout">
          <h1 className="workoutTitle">Bend and Reach</h1>
          <p className="sets">Sets: 1</p>
          <p className="sets">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Rear Lunge</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">High Jumper</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Rower</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Squat Bender</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Windmill</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Forward Lunge</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Prone Row</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Bent-leg Body Twist</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
        <li className="workout">
          <h1 className="workoutTitle">Push-up</h1>
          <p className="sets">Sets: 1</p>
          <p className="reps">Reps: 10</p>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
