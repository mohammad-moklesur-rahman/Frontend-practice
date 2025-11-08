import { useContext } from "react";
import { AuthContext } from "../context/Firebase/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);


  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;
