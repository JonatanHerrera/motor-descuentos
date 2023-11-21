import Login from "./components/login/login.js";
import Form from "./components/form/form.js";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      setUser( JSON.parse(loggedUserJSON))
      setIsLoggedIn(true);
    }
  }, []);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = ()=>{
    setIsLoggedIn(false);
    window.localStorage.removeItem('loggedAppUser')
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Form onLogOut = {handleLogOut} user = {user}/>
      ) : (
        <Login onSuccessfulLogin={handleSuccessfulLogin} />
      )}
    </div>
  );
}

export default App;
