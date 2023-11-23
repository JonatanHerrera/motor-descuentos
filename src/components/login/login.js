import React, { useState } from "react";
import loginService from "../../services/login";
import logo from "../../Images/logo.svg";
import "./Login.css"; // Importa el archivo de estilos
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="form-signin w-100  m-auto">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="row"> 
          <img
            className="mb-5"
            src={logo}
            alt="logo-login"
            height="100"
          ></img>
        </div>

        <h5 className=" mb-2 fw-normal">Por favor inicie sesion</h5>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="floatingInput"
            type="text"
            name="username"
            placeholder="Usuario"
            value={username}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Usuario</label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="floatingPassword"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <div className="container">
          <div className="row">
            <button type="submit" className="btn btn-primary">
              Iniciar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
