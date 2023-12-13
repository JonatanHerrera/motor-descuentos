import React, { useState } from "react";
import login from "../../services/login";
import logo from "../../Images/logo.svg";
import "./Login.css"; // Importa el archivo de estilos
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ onSuccessfulLogin }) => {
  // State to store the input values
  // const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
      username: username,
      password: password,
    };
    try {
      const newUser = await login(data);
      if (newUser.token !== "") {
        window.localStorage.setItem("loggedAppUser", JSON.stringify(newUser));
        //setUser(newUser);
        setUsername("");
        setPassword("");
        onSuccessfulLogin();
      } else {
        setPassword("");
        setError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isFormValid =
    username.trim() !== "" && password.trim() !== "" && password.length > 2;

  return (
    <div className="form-signin w-100  m-auto rounded-5 border border-3">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="row">
          <img className="mb-5" src={logo} alt="logo-login" height="100"></img>
        </div>

        <h5 className=" mb-2 fw-normal">Bienvenido, por favor inicia sesión</h5>
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
            <div className="alert alert-danger" role="alert" hidden={!error}>
              Usuario o Contraseña Inválida
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
            >
              Iniciar
            </button>

          </div>
        </div>        
      </form>
    </div>
  );
};

export default Login;
