import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall(null).unwrap();
      dispatch(logout());
      //   navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    logoutHandler();
  }, []);

  return <div>You are logged out</div>;
};

export default Logout;
