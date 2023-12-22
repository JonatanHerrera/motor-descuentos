import React from "react";
import Form from "../components/form/Form";
import Logout from "../components/logout/Logout";

const MainPage = ({ onLogOut }) => {
  return (
    <div>
      <Form onLogOut={onLogOut} />
      <Logout handleLogOut={onLogOut} />
    </div>
  );
};

export default MainPage;
