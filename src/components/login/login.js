import React, { useState } from "react";
import loginService from "../../services/login";

const Login = ({ onSuccessfulLogin }) => {
  // State to store the input values
  // const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const data = {
      marca: username,
      password: password,
    };
    try {
      const newUser = await loginService.login(data);
      if (newUser.token !== "") {
        window.localStorage.setItem("loggedAppUser", JSON.stringify(newUser));
        //setUser(newUser);
        setUsername("");
        setPassword("");
        onSuccessfulLogin();
      } else {
        alert("Usuario o Contraseña Invalida");
        setPassword("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Usuario
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={username}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Iniciar</button>
      </form>
    </div>
  );
};

export default Login;
