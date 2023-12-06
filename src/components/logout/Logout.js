import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Logout = ({ onLogOut }) => {
  const handleLogOut = () => {
    onLogOut();
  };
  return (
    <div className="dropdown position-fixed top-0 end-0 mt-3 me-3 bd-mode-toggle">
      <button type="button" className="btn btn-outline-secondary" onClick={handleLogOut}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Logout;
