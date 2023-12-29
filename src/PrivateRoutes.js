
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  
  const isLoggedIn = window.localStorage.getItem("loggedAppUser");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
