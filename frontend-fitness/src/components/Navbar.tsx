import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const { userInfo } = useSelector((state: any) => state.auth);
  return (
    <div>
      <Link to="/">Home</Link>

      {!userInfo ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Dasboard</Link>
          <Link to="/logout">Logout</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
