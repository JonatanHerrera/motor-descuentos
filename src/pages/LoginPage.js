import React from "react";
import Login from "../components/login/Login";

const LoginPage = ({ onSuccessfulLogin }) => {
  return (
    <div>      
      <Login onSuccessfulLogin = {onSuccessfulLogin} />      
    </div>
  );
};

export default LoginPage;
