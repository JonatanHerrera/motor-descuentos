import Login from "./components/login/Login.js";
import Form from "./components/form/Form.js";
import { useEffect, useState } from "react";


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

  const handleLogOut = ()=>{
    setIsLoggedIn(false);
    window.localStorage.removeItem('loggedAppUser')
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Form onLogOut = {handleLogOut} />
      ) : (
        <Login onSuccessfulLogin={handleSuccessfulLogin} />
      )}
      
    </div>
  );
}

export default App;
