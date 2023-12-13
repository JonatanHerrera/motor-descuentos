import Login from "./components/login/Login.js";
import Form from "./components/form/Form.js";
import Logout from "./components/logout/Logout.js";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import logo from '../src/Images/logo.svg'
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [user, setUser] = useState('')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("loggedAppUser");
  };

  return (
    <div className="container principal-Form justify-content-center align-items-center d-flex ">
      <Helmet>
        <title>Motor de descuentos</title>
        <link rel="icon" type="image/svg+xml" href={logo} />
      </Helmet>
      {
      isLoggedIn ? (
        <div>
          <Form onLogOut={handleLogOut}/>
          <Logout onLogOut={handleLogOut} />
        </div>
      ) : (
        <Login onSuccessfulLogin={handleSuccessfulLogin} />
      )}
    </div>
  );
}

export default App;
