import {useEffect, useState, React} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";
import PrivateRoutes from "./PrivateRoutes.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    window.location.href = "/main";
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("loggedAppUser");
  };

  return (
    <div className="container principal-Form justify-content-center align-items-center d-flex ">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<>NOT FOUND</>} />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/main" />
              ) : (
                <LoginPage onSuccessfulLogin={handleSuccessfulLogin} />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/main" />
              ) : (
                <LoginPage onSuccessfulLogin={handleSuccessfulLogin} />
              )
            }
          />

          <Route element={<PrivateRoutes />}>
            <Route
              path="/main"
              element={<MainPage onLogOut={handleLogOut} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
