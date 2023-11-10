import React, { useState } from "react";

const Login = () => {
  // State to store the input values
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
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Log the entered values to the console
    console.log("Submitted username:", username);
    console.log("Submitted password:", password);

    // You can add additional logic here, like sending the data to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Contraseña
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Iniciar</button>
      </form>
    </div>
  );
};

export default Login;
